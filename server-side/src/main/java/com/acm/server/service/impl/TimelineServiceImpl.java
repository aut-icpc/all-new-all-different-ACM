package com.acm.server.service.impl;

import com.acm.server.mapper.TimelineMapper;
import com.acm.server.model.dto.TimelineDto;
import com.acm.server.repository.TimelineRepository;
import com.acm.server.service.TimelineService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimelineServiceImpl implements TimelineService {
    private final TimelineRepository timelineRepository;
    private final TimelineMapper mapper = TimelineMapper.INSTANCE;

    @Override
    public List<TimelineDto> getTimelines() {
        return timelineRepository.findAll()
                .stream().map(mapper::toDto).collect(Collectors.toList());
    }

    @Override
    public TimelineDto saveTimeline(TimelineDto dto) {
        return mapper.toDto(timelineRepository.save(mapper.toEntity(dto)));
    }
}
