package com.acm.server.mapper;

import com.acm.server.domain.Countdown;
import com.acm.server.model.dto.CountdownDto;
import org.mapstruct.Mapper;

/**
 * Countdown Mapper
 * @see com.acm.server.domain.Countdown
 * @see com.acm.server.model.dto.CountdownDto
 *
 * @author Farid Masjedi
 */
@Mapper
public interface CountdownMapper {
    CountdownMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(CountdownMapper.class);

    CountdownDto toCountdownDto(Countdown countdown);

    Countdown toCountdown(CountdownDto countdownDto);
}
