package com.acm.server.mapper;

import com.acm.server.domain.Archive;
import com.acm.server.model.dto.ArchiveDto;
import org.mapstruct.Mapper;

@Mapper
public interface ArchiveMapper {
    ArchiveMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(ArchiveMapper.class);
    ArchiveDto toArchiveDto(Archive archive);
    Archive toArchive(ArchiveDto dto);
}
