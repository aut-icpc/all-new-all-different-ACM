package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.domain.file.picture.PictureType;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.service.PictureUploaderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * Controller class for handling picture upload requests.
 * This class is responsible for handling picture upload related operations.
 * The base URL for this controller is "{@value Constants#BASE_CONTEST_API_URL}/picture"
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/picture")
@RequiredArgsConstructor
public class PictureController {

    private final PictureUploaderService pictureUploader;

    /**
     * Handles the POST request for uploading a picture.
     *
     * @param file The picture file to be uploaded.
     * @param type The type of the picture.
     * @return ResponseEntity with a BaseResponseDto containing a success message and
     * the uploaded picture's information if the upload is successful,
     * or a BaseResponseDto containing an error message if it fails.
     */
    @PostMapping
    public ResponseEntity<BaseResponseDto<String>> uploadPicture(@RequestBody MultipartFile file,
                                                                 @RequestParam PictureType type) {
        try {
            // Upload the picture using the provided MultipartFile and PictureType
            String uploadedPictureInfo = pictureUploader.uploadPicture(file, type);

            // Create a success response containing the uploaded picture's information
            BaseResponseDto<String> responseDto = new BaseResponseDto<>("Picture uploaded successfully", uploadedPictureInfo);

            // Return the response entity with the success response
            return ResponseEntity.ok(responseDto);
        } catch (IOException e) {
            // If there is an IOException during the upload process, create an error response
            BaseResponseDto<String> errorDto = new BaseResponseDto<>("Failed to upload picture", null);

            // Return the response entity with the error response and INTERNAL_SERVER_ERROR status
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorDto);
        }
    }
}
