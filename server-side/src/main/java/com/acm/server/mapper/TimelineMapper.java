package com.acm.server.mapper;

import com.acm.server.domain.Timeline;
import com.acm.server.model.dto.TimelineDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * Timeline Mapper
 * @see com.acm.server.domain.Timeline
 * @see com.acm.server.model.dto.TimelineDto
 *
 * @author Farid Masjedi
 */
@Mapper
public interface TimelineMapper {
    TimelineMapper INSTANCE = Mappers.getMapper(TimelineMapper.class);

    TimelineDto toDto(Timeline timeline);

    Timeline toEntity(TimelineDto dto);

}
