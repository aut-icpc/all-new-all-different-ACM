package com.acm.server.service.impl;

import com.acm.server.domain.Archive;
import com.acm.server.mapper.ArchiveMapper;
import com.acm.server.model.dto.ArchiveDto;
import com.acm.server.repository.ArchiveRepository;
import com.acm.server.service.ArchiveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArchiveServiceImpl implements ArchiveService {
    private final ArchiveRepository repository;
    private final ArchiveMapper mapper = ArchiveMapper.INSTANCE;

    @Override
    public List<ArchiveDto> getArchives() {
        return repository.findAll()
                .stream().map(mapper::toArchiveDto).collect(Collectors.toList());
    }

    @Override
    public ArchiveDto getArchive(Long id) {
        return fetchLazyColumns(repository.findById(id)).map(mapper::toArchiveDto).orElseThrow();
    }

    private Optional<Archive> fetchLazyColumns(Optional<Archive> archive) {
        if (archive.isPresent()) {
            Archive arc = archive.get();
            arc.getPicture();
            arc.getRankings();
            arc.getQuestions();
        }
        return archive;
    }
}
