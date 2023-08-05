package com.acm.server.service.impl;

import com.acm.server.domain.CountdownType;
import com.acm.server.mapper.CountdownMapper;
import com.acm.server.model.dto.CountdownDto;
import com.acm.server.repository.CountdownRepository;
import com.acm.server.service.CountdownService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Implementation of the CountdownService interface.
 * @author Farid Masjedi
 */
@Service
@RequiredArgsConstructor
public class CountdownServiceImpl implements CountdownService {

    private final CountdownRepository repository;
    private final CountdownMapper mapper = CountdownMapper.INSTANCE;

    /**
     * Creates a new countdown.
     *
     * @param countdownDto The countdown DTO object containing the countdown details.
     * @return The created countdown DTO object.
     */
    @Override
    public CountdownDto createCountdown(CountdownDto countdownDto) {
        // Save the countdown to the repository and convert it to a DTO using the mapper
        return mapper.toCountdownDto(repository.save(mapper.toCountdown(countdownDto)));
    }

    /**
     * Updates an existing countdown.
     *
     * @param countdownDto The countdown DTO object containing the updated countdown details.
     * @return The updated countdown DTO object.
     */
    @Override
    public CountdownDto updateCountdown(CountdownDto countdownDto) {
        // Save the updated countdown to the repository and convert it to a DTO using the mapper
        return mapper.toCountdownDto(repository.save(mapper.toCountdown(countdownDto)));
    }

    /**
     * Deletes a countdown by its ID.
     *
     * @param id The ID of the countdown to delete.
     */
    @Override
    public void deleteCountdown(Long id) {
        // Delete the countdown from the repository by its ID
        repository.deleteById(id);
    }

    /**
     * Retrieves a countdown by its ID.
     *
     * @param id The ID of the countdown to retrieve.
     * @return The countdown DTO object, or null if the countdown is not found.
     */
    @Override
    public CountdownDto getCountdown(CountdownType type) {
        // Find the countdown in the repository by its ID and convert it to a DTO using the mapper
        return mapper.toCountdownDto(repository.getByType(type));
    }
}
