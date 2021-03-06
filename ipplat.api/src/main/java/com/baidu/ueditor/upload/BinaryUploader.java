package com.baidu.ueditor.upload;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import com.baidu.ueditor.PathFormat;
import com.baidu.ueditor.define.AppInfo;
import com.baidu.ueditor.define.BaseState;
import com.baidu.ueditor.define.FileType;
import com.baidu.ueditor.define.State;

/**
 * spring 默认MultipartFile格式的文件，将ServletFileUpload进行强制转换
 * @author jiahh 2016年8月15日
 * 这个是使用baiduUEditor融合springMVC会遇到的一个问题
 */
public class BinaryUploader {

	public static final State save(HttpServletRequest request,
			Map<String, Object> conf) {
		// ueditor 的文件默认参数名
		String nameparm = "upfile";
		// 配置文件对应的文件id
		nameparm = (String)conf.get("fieldName");
		// jiahh spring 默认MultipartFile格式的文件，将ServletFileUpload进行强制转换
		StandardMultipartHttpServletRequest re = (StandardMultipartHttpServletRequest) request;
//		Iterator<String> names = re.getFileNames();
//		do{
//			
//			if("file".equals(names.next())){
//				nameparm = "file";// 百度上传插件的默认参数名
//			}
//			//System.out.println(names.next());
//		}while(names.hasNext());

		MultipartFile file = re.getFile(nameparm);
		//file = re.getFile("file");

		FileItemStream fileStream = null;
		boolean isAjaxUpload = request.getHeader( "X_Requested_With" ) != null;

		if (!ServletFileUpload.isMultipartContent(request)) {
			return new BaseState(false, AppInfo.NOT_MULTIPART_CONTENT);
		}

//		ServletFileUpload upload = new ServletFileUpload(
//				new DiskFileItemFactory());
//
//        if ( isAjaxUpload ) {
//            upload.setHeaderEncoding( "UTF-8" );
//        }

		try {
			// jiahh spring 默认MultipartFile格式的文件，将ServletFileUpload进行强制转换
//			FileItemIterator iterator = upload.getItemIterator(request);
//
//			while (iterator.hasNext()) {
//				fileStream = iterator.next();
//
//				if (!fileStream.isFormField())
//					break;
//				fileStream = null;
//			}
//			if (fileStream == null) {
//				return new BaseState(false, AppInfo.NOTFOUND_UPLOAD_DATA);
//			}
			if (file.isEmpty()) {
				return new BaseState(false, AppInfo.NOTFOUND_UPLOAD_DATA);
			}

			String savePath = (String) conf.get("savePath");
			//String originFileName = fileStream.getName();
			// jiahh spring 默认MultipartFile格式的文件，将ServletFileUpload进行强制转换
			String originFileName = file.getOriginalFilename();
			String suffix = FileType.getSuffixByFilename(originFileName);

			originFileName = originFileName.substring(0,
					originFileName.length() - suffix.length());
			savePath = savePath + suffix;

			long maxSize = ((Long) conf.get("maxSize")).longValue();

			if (!validType(suffix, (String[]) conf.get("allowFiles"))) {
				return new BaseState(false, AppInfo.NOT_ALLOW_FILE_TYPE);
			}

			savePath = PathFormat.parse(savePath, originFileName);

			String physicalPath = (String) conf.get("rootPath") + savePath;

			//InputStream is = fileStream.openStream();
			// jiahh spring 默认MultipartFile格式的文件，将ServletFileUpload进行强制转换
			InputStream is = file.getInputStream();
			State storageState = StorageManager.saveFileByInputStream(is,
					physicalPath, maxSize);
			is.close();

			if (storageState.isSuccess()) {
				storageState.putInfo("url", PathFormat.format(savePath));
				storageState.putInfo("type", suffix);
				storageState.putInfo("original", originFileName + suffix);
			}

			return storageState;
		} catch (IOException e) {
			return new BaseState(false, AppInfo.IO_ERROR);
		}
	}

	private static boolean validType(String type, String[] allowTypes) {
		List<String> list = Arrays.asList(allowTypes);

		return list.contains(type);
	}
}
