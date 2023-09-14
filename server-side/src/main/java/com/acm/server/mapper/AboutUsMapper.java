package com.acm.server.mapper;

import com.acm.server.domain.AboutUs;
import com.acm.server.model.dto.AboutUsDto;
import org.mapstruct.Mapper;

/**
 * About Us Mapper
 * @see com.acm.server.domain.AboutUs
 * @see com.acm.server.model.dto.AboutUsDto
 *
 * @author Farid Masjedi
 */
@Mapper
public interface AboutUsMapper {
    AboutUsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(AboutUsMapper.class);

    AboutUsDto toAboutUsDto(AboutUs aboutUs);

    AboutUs toAboutUs(AboutUsDto dto);
}
