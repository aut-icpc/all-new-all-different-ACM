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

@RestController
@RequestMapping(Constants.BASE_API_URL + "/archive")
@RequiredArgsConstructor
public class ArchiveController {
    private final ArchiveService archiveService;

    @GetMapping
    public ResponseEntity<BaseResponseDto<List<ArchiveDto>>> getArchives() {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "The archives returned successfully!", archiveService.getArchives()
        ));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BaseResponseDto<ArchiveDto>> getArchive(@PathVariable Long id) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "The archive returned successfully!", archiveService.getArchive(id)
        ));
    }
}
