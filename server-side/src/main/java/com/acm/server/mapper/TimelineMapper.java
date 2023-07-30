package com.acm.server.mapper;

import com.acm.server.domain.Timeline;
import com.acm.server.model.dto.TimelineDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TimelineMapper {
    TimelineMapper INSTANCE = Mappers.getMapper(TimelineMapper.class);

    TimelineDto toDto(Timeline timeline);

    Timeline toEntity(TimelineDto dto);

}
