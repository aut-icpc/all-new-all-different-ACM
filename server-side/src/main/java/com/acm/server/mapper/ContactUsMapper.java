package com.acm.server.mapper;

import com.acm.server.domain.ContactUs;
import com.acm.server.model.dto.ContactUsDto;
import org.mapstruct.Mapper;

/**
 * Contact Us Mapper
 * @see com.acm.server.domain.ContactUs
 * @see com.acm.server.model.dto.ContactUsDto
 *
 * @author Farid Masjedi
 */
@Mapper
public interface ContactUsMapper {
    ContactUsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(ContactUsMapper.class);

    ContactUsDto toDto(ContactUs entity);
}
