package com.acm.server.mapper;

import com.acm.server.domain.AboutUs;
import com.acm.server.domain.picture.AboutUsPicture;
import com.acm.server.model.dto.AboutUsDto;
import org.mapstruct.Mapper;

import java.util.Base64;

@Mapper
public interface AboutUsMapper {
    AboutUsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(AboutUsMapper.class);

    AboutUsDto toAboutUsDto(AboutUs aboutUs);

    AboutUs toAboutUs(AboutUsDto dto);

    default String aboutUsPictureToString(AboutUsPicture value) {
        return Base64.getEncoder().encodeToString(value.getData());
//        return new String(base64String.getBytes(StandardCharsets.UTF_8), StandardCharsets.UTF_8);
    }

    default AboutUsPicture stringToAboutUsPicture(String value) {
        return (AboutUsPicture) new AboutUsPicture().setData(
                Base64.getDecoder().decode(value));
    }
}
