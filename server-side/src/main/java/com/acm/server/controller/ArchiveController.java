package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.ArchiveDto;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller class for handling requests related to the archive functionality.
 * This class is responsible for managing the archive-related operations.
 * The base URL for this controller is "{@value Constants#BASE_API_URL}/archive".
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/archive")
@RequiredArgsConstructor
public class ArchiveController {
    private final ArchiveService archiveService;

    /**
     * Retrieves all archives.
     *
     * @return ResponseEntity containing the response with a list of ArchiveDto objects.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<List<ArchiveDto>>> getArchives() {
        // Retrieve all archives from the service layer
        List<ArchiveDto> archives = archiveService.getArchives();

        // Return the response entity with the list of ArchiveDto objects wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("The archives returned successfully!", archives));
    }

    /**
     * Retrieves a specific archive based on the provided archive ID.
     *
     * @param id The ID of the archive to retrieve.
     * @return ResponseEntity containing the response with the ArchiveDto object.
     */
    @GetMapping("/{id}")
    public ResponseEntity<BaseResponseDto<ArchiveDto>> getArchive(@PathVariable Long id) {
        // Retrieve the archive from the service layer based on the provided ID
        ArchiveDto archive = archiveService.getArchive(id);

        // Return the response entity with the ArchiveDto object wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("The archive returned successfully!", archive));
    }
}
