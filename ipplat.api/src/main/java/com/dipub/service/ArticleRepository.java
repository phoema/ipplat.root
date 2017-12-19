
package com.dipub.service;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.dipub.domain.Article;

public interface ArticleRepository extends PagingAndSortingRepository<Article,Long>{

	Page<Article> findByType(int type,Pageable page);
	List<Article> findByTopimageNotNullAndTopimageNot(String topimage,Pageable page);
	List<Article> findByIstop(int istop,Pageable page);
	Page<Article> findByTypeAndTitleContaining(int type,String title, Pageable page);
}
