package com.acm.server.service;

import com.acm.server.domain.file.picture.PictureType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author Farid Masjedi
 * description: This interface is the service for the picture upload
 * @see com.acm.server.service.impl.PictureUploaderServiceImpl
 */
public interface PictureUploaderService {
    String uploadPicture(MultipartFile file, PictureType type) throws IOException;
}
