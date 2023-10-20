package com.acm.server.service.impl;

import com.acm.server.mapper.ContestantMapper;
import com.acm.server.model.dto.ContestantDto;
import com.acm.server.repository.ContestantRepository;
import com.acm.server.service.ContestantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContestantServiceImpl implements ContestantService {
    private final ContestantRepository repository;
    private final ContestantMapper mapper = ContestantMapper.INSTANCE;

    @Override
    public ContestantDto saveContestant(ContestantDto dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }
}
