package com.acm.server.service;

import com.acm.server.domain.picture.PictureType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface PictureUploaderService {
    String uploadPicture(MultipartFile file, PictureType type) throws IOException;
}
