package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.domain.picture.PictureType;
import com.acm.server.service.PictureUploaderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping(Constants.BASE_API_URL + "/picture")
@RequiredArgsConstructor
public class PictureController {

    private final PictureUploaderService pictureUploader;

    @PostMapping
    public ResponseEntity<String> uploadPicture(@RequestBody MultipartFile file, @RequestParam PictureType type) {
        try {
            pictureUploader.uploadPicture(file, type);
            return ResponseEntity.ok("Picture uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload picture");
        }
    }
}
