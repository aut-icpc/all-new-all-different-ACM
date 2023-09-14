package com.acm.server.mapper;

import com.acm.server.domain.RegistrationTerms;
import com.acm.server.model.dto.RegistrationTermsDto;
import org.mapstruct.Mapper;

/**
 * Registration Terms Mapper
 * @see com.acm.server.domain.RegistrationTerms
 * @see com.acm.server.model.dto.RegistrationTermsDto
 *
 * @author Farid Masjedi
 */

@Mapper
public interface RegistrationTermsMapper {
    RegistrationTermsMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(RegistrationTermsMapper.class);

    RegistrationTermsDto toDto(RegistrationTerms entity);
}
