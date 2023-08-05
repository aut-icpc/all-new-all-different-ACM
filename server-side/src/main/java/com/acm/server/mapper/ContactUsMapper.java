package com.acm.server.mapper;

import com.acm.server.domain.ContactUs;
import com.acm.server.model.dto.ContactUsDto;
import org.mapstruct.Mapper;

@Mapper
public interface ContactUsMapper {
    ContactUsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(ContactUsMapper.class);

    ContactUsDto toDto(ContactUs entity);
}
