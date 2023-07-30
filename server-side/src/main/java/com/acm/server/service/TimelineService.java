package com.acm.server.service;

import com.acm.server.model.dto.TimelineDto;

import java.util.List;

public interface TimelineService {
    List<TimelineDto> getTimelines();
    TimelineDto saveTimeline(TimelineDto dto);
}
