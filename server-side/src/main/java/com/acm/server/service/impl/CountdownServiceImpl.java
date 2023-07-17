package com.acm.server.service.impl;

import com.acm.server.mapper.CountdownMapper;
import com.acm.server.model.dto.CountdownDto;
import com.acm.server.repository.CountdownRepository;
import com.acm.server.service.CountdownService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CountdownServiceImpl implements CountdownService {

    private final CountdownRepository repository;
    private final CountdownMapper mapper = CountdownMapper.INSTANCE;

    @Override
    public CountdownDto createCountdown(CountdownDto countdownDto) {
        return mapper.toCountdownDto(repository.save(mapper.toCountdown(countdownDto)));
    }

    @Override
    public CountdownDto updateCountdown(CountdownDto countdownDto) {
        return mapper.toCountdownDto(repository.save(mapper.toCountdown(countdownDto)));
    }

    @Override
    public void deleteCountdown(Long id) {
        repository.deleteById(id);
    }

    @Override
    public CountdownDto getCountdown(Long id) {
        return mapper.toCountdownDto(repository.findById(id).orElse(null));
    }
}
