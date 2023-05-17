package com.acm.server.service;

import com.acm.server.model.dto.CountdownDto;
import com.acm.server.service.impl.CountdownServiceImpl;
import org.springframework.stereotype.Service;

/**
 * @author Farid Masjedi
 * description: This interface is the service for the countdown
 * @see CountdownServiceImpl
 */

@Service
public interface CountdownService {
    CountdownDto createCountdown(CountdownDto countdownDto);

    CountdownDto updateCountdown(CountdownDto countdownDto);

    void deleteCountdown(Long id);

    CountdownDto getCountdown(Long id);
}
