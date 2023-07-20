package com.acm.server.service.impl;

import com.acm.server.mapper.AboutUsMapper;
import com.acm.server.model.dto.AboutUsDto;
import com.acm.server.repository.AboutUsRepository;
import com.acm.server.service.AboutUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Implementation of the AboutUsService interface.
 * @author Farid Masjedi
 */
@Service
@RequiredArgsConstructor
public class AboutUsServiceImpl implements AboutUsService {
    private final AboutUsRepository repository;
    private final AboutUsMapper mapper = AboutUsMapper.INSTANCE;

    /**
     * Retrieves all AboutUsDto objects.
     *
     * @return A list of AboutUsDto objects.
     */
    @Override
    public List<AboutUsDto> getAboutUs() {
        // Retrieve all AboutUs entities from the repository and convert them to DTOs using the mapper
        return repository.findAll().stream().map(mapper::toAboutUsDto).collect(Collectors.toList());
    }

    /**
     * Saves an AboutUsDto object.
     *
     * @param dto The AboutUsDto object to save.
     * @return The saved AboutUsDto object.
     */
    @Override
    public AboutUsDto saveAboutUs(AboutUsDto dto) {
        // Save the AboutUsDto object to the repository and convert it to a DTO using the mapper
        return mapper.toAboutUsDto(repository.save(mapper.toAboutUs(dto)));
    }
}
