package com.acm.server.mapper;

import com.acm.server.domain.AboutUs;
import com.acm.server.model.dto.AboutUsDto;
import org.mapstruct.Mapper;

@Mapper
public interface AboutUsMapper {
    AboutUsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(AboutUsMapper.class);

    AboutUsDto toAboutUsDto(AboutUs aboutUs);
}
