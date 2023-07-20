package com.acm.server.service;

import com.acm.server.model.dto.CountdownDto;
import com.acm.server.service.impl.CountdownServiceImpl;

/**
 * @author Farid Masjedi
 * description: This interface is the service for the countdown
 * @see CountdownServiceImpl
 */

public interface CountdownService {
    CountdownDto createCountdown(CountdownDto countdownDto);

    CountdownDto updateCountdown(CountdownDto countdownDto);

    void deleteCountdown(Long id);

    CountdownDto getCountdown(Long id);
}
