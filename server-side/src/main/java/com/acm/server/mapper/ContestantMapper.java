package com.acm.server.mapper;

import com.acm.server.domain.Contestant;
import com.acm.server.model.dto.ContestantDto;
import org.mapstruct.Mapper;

@Mapper
public interface ContestantMapper {
    ContestantMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(ContestantMapper.class);

    ContestantDto toDto(Contestant contestant);

    Contestant toEntity(ContestantDto dto);
}
