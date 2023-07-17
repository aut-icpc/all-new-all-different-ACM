package com.acm.server.service.impl;

import com.acm.server.mapper.AboutUsMapper;
import com.acm.server.model.dto.AboutUsDto;
import com.acm.server.repository.AboutUsRepository;
import com.acm.server.service.AboutUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AboutUsServiceImpl implements AboutUsService {
    private final AboutUsRepository repository;

    private final AboutUsMapper mapper = AboutUsMapper.INSTANCE;

    @Override
    public List<AboutUsDto> getAboutUs() {
        return repository.findAll().stream().map(mapper::toAboutUsDto).collect(Collectors.toList());
    }

    @Override
    public AboutUsDto saveAboutUs(AboutUsDto dto) {
        return mapper.toAboutUsDto(repository.save(mapper.toAboutUs(dto)));
    }
}
