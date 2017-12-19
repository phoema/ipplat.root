package com.dipub.web.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.client.ClientProtocolException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dipub.domain.Article;
import com.dipub.http.HttpClientService;
import com.dipub.service.ArticleRepository;
import com.dipub.web.CommonController;
import com.google.common.base.Strings;

@RestController
@Slf4j
@RequestMapping(value="/api/article",method={RequestMethod.POST,RequestMethod.GET})
@CacheConfig(cacheNames = "commendpatent")
public class ArticleController  extends CommonController{
    @Autowired
    private ArticleRepository articleRepository;
	// 创建HttpClient实例
	@Autowired
	private HttpClientService httpClientService;
 
//    @RequestMapping("/save2")
//    @ResponseBody
//    public Article save2(HttpServletRequest request) throws Exception {
//    	log.info("save2--id=" + request.getParameter("id"));
//    	String id = request.getParameter("id");
//    	Article article = new Article();
//    	if(!Strings.isNullOrEmpty(id)){
//    		article.setId(Long.parseLong(id));
//    	}
//		if(article.getId() == null){
//			article.setCreatetime(new Date());
//		}else{
//			article = articleRepository.findOne(article.getId());
//		}
//
//    	article.setTitle(request.getParameter("title"));
//    	article.setDetail(request.getParameter("detail"));
//    	article.setType(Integer.parseInt(request.getParameter("type")));
//    	article.setUpdatetime(new Date());
//    	article.setIstop(Integer.parseInt(request.getParameter("istop")));
//		
//    	article.setTopimage(Strings.isNullOrEmpty(request.getParameter("topimage"))? null : request.getParameter("topimage"));
//    	article.setAttachment(Strings.isNullOrEmpty(request.getParameter("attachment"))? null : request.getParameter("attachment"));
//    	article.setSource(Strings.isNullOrEmpty(request.getParameter("source"))? null : request.getParameter("source"));
//    	article.setLink(Strings.isNullOrEmpty(request.getParameter("link"))? null : request.getParameter("link"));
//    	article.setAuthor(Strings.isNullOrEmpty(request.getParameter("author"))? null : request.getParameter("author"));
//
//    	article = articleRepository.save(article);
//        return article;
//    }
    @RequestMapping("/save")
    public Article save(@RequestBody Article article) throws Exception {
		if(article.getId() == null){
			article.setCreatetime(new Date());
		}else{
			Article dbvalue = articleRepository.findOne(article.getId());
			if(dbvalue != null){
				dbvalue.setTitle(article.getTitle());
				dbvalue.setDetail(article.getDetail());
				dbvalue.setType(article.getType());
				dbvalue.setUpdatetime(new Date());
				dbvalue.setIstop(article.getIstop());
				
				dbvalue.setTopimage(Strings.isNullOrEmpty(article.getTopimage())? null : article.getTopimage());
				dbvalue.setAttachment(Strings.isNullOrEmpty(article.getAttachment())? null : article.getAttachment());
				dbvalue.setSource(Strings.isNullOrEmpty(article.getSource())? null : article.getSource());
				dbvalue.setLink(Strings.isNullOrEmpty(article.getLink())? null : article.getLink());
				dbvalue.setAuthor(Strings.isNullOrEmpty(article.getAuthor())? null : article.getAuthor());
				
				article = dbvalue;
			}else{
				throw new Exception("指定文章不存在");
			}
		}
    	article = articleRepository.save(article);
        return article;
    }
    @RequestMapping("/delete")
    public void delete(Long id) throws Exception {
    	articleRepository.delete(id);;
    }
    @RequestMapping("/get")
    public Article get(Long id) {
    	
    	Article article = articleRepository.findOne(id);
    	// 访问一次，浏览量++
    	article.setBrowser(article.getBrowser() + 1);
    	article = articleRepository.save(article);
    	
        return article;
    }
    @RequestMapping("/getbytop")
    public List<Article> getbytop(Integer page ,Integer size) {
    	// 封面图不默认空，默认取前5
    	Pageable pageable = new PageRequest(0,5,Direction.DESC,"createtime");
    	if(page != null && size!= null ){
    		pageable = new PageRequest(page,size);
    	}
		//Pageable page = new PageRequest(2,1);// page start 0
    	List<Article> articles = articleRepository.findByIstop(1,pageable);
    	// 去除detail字段
    	for(Article article : articles){
    		article.setDetail(null);
    	}
        return articles;
    }
    @RequestMapping("/getbytype")
    public Page<Article> getbytype(int type,String title,Integer page ,Integer size) {
    	Pageable pageable = null;
    	if(page != null && size!= null ){
    		pageable = new PageRequest(page,size,Direction.DESC,"createtime");
    	}
    	Page<Article> articles = null;
    	if(title!=null){
    		articles = articleRepository.findByTypeAndTitleContaining(type,title,pageable);
    	}else{
        	articles = articleRepository.findByType(type,pageable);
    		
    	}
    	// 去除detail字段
    	for(Article article : articles){
    		article.setDetail(null);
    	}
        return articles;
    }
    @RequestMapping("/list")
    public List<Article> getall() {
    	List<Article> articles = (List<Article>)articleRepository.findAll();
    	// 去除detail字段
    	for(Article article : articles){
    		article.setDetail(null);
    	}
        return articles;
    }
    /**
     * 暂时不用
     */
    @RequestMapping("/browserplus")
    private Article browserplus(long id) {
    	Article article = articleRepository.findOne(id);
    	article.setBrowser(article.getBrowser() + 1);
    	article = articleRepository.save(article);
        return article;
    }
 
    
    Pattern reg_ = Pattern.compile("<a href=\"vShowroom.aspx\\?id=(\\d+)\" target=\"_blank\" title=\"(.*?)\"><img");
	/***
	 * 获取http://www.scptd.com.cn/Showroom.aspx页面的5条推荐专利，缓存10天
	 * @return
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	@RequestMapping("/commendpatent")
	@Cacheable
	public List<Article> commendPatent() throws ClientProtocolException, IOException {
		String htmlInfo = httpClientService.doGet("http://www.scptd.com.cn/Showroom.aspx");
		System.out.println(htmlInfo);
		// <a href="vShowroom.aspx?id=537" target="_blank" title="防松动自锁供电插座">
		// 专利号抽取正则
		Matcher matcher = reg_.matcher(htmlInfo);
		int num = 0;
		List<Article> articles = new ArrayList<Article>();
		while(matcher.find()){
			num++;
			Long id =Long.parseLong( matcher.group(1));
			String title = matcher.group(2);
            System.out.println(id + "--" + title);
			int count = matcher.groupCount();
			Article article = new Article();
			article.setId(id);
			article.setTitle(title);
			articles.add(article);

			if(num >=6) break;
        }
		return articles;
	}
}
