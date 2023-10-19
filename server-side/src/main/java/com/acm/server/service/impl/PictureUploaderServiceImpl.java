package com.acm.server.service.impl;

import com.acm.server.config.HostConfiguration;
import com.acm.server.domain.file.picture.PictureType;
import com.acm.server.service.PictureUploaderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Service implementation class for uploading pictures.
 * @author Farid Masjedi
 */
@Service
@RequiredArgsConstructor
public class PictureUploaderServiceImpl implements PictureUploaderService {

    private final HostConfiguration hostConfiguration;

    @Override
    public String uploadPicture(MultipartFile file, PictureType type) throws IOException {
        // Generate a unique filename for the uploaded picture
        String fileName = generateUniqueFileName(file.getOriginalFilename(), type);

        // Create the target directory if it doesn't exist
        Path uploadPath = Path.of(hostConfiguration.getUploadBaseDir());
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Copy the uploaded file to the target directory
        Path targetPath = uploadPath.resolve(fileName);

        if (Files.exists(targetPath))
            throw new IOException("File already exists: " + fileName);

        Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
        return "http://".concat(hostConfiguration.getName()).concat(hostConfiguration.getBaseRoute())
                .concat(fileName);
    }

    /**
     * Generates a unique filename for the uploaded picture based on the original filename and picture type.
     *
     * @param originalFilename The original filename of the uploaded picture.
     * @param type             The type of the picture.
     * @return The unique filename for the uploaded picture.
     */
    private String generateUniqueFileName(String originalFilename, PictureType type) {
        String timestamp = LocalDateTime.now().toString().replace(":", "-");
        String randomString = UUID.randomUUID().toString().replace("-", "");
        return type + "_" + timestamp + "_" + randomString + originalFilename;
    }
}
