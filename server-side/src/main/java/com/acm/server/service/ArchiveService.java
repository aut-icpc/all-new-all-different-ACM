package com.acm.server.service;

import com.acm.server.model.dto.ArchiveDto;

import java.util.List;

public interface ArchiveService {
    List<ArchiveDto> getArchives();
    ArchiveDto getArchive(Long id);
}
