package com.acm.server.mapper;

import com.acm.server.domain.Mail;
import com.acm.server.model.dto.MailDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MailMapper {
    MailMapper INSTANCE = Mappers.getMapper(MailMapper.class);
    MailDto toDto(Mail mail);
    Mail toEntity(MailDto mailDto);
}
