package com.acm.server.mapper;

import com.acm.server.domain.Countdown;
import com.acm.server.model.dto.CountdownDto;
import org.mapstruct.Mapper;

@Mapper
public interface CountdownMapper {
    CountdownMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(CountdownMapper.class);

    CountdownDto toCountdownDto(Countdown countdown);

    Countdown toCountdown(CountdownDto countdownDto);
}
