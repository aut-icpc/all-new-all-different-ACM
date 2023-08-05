package com.acm.server.service.impl;

import com.acm.server.mapper.RegistrationTermsMapper;
import com.acm.server.model.dto.RegistrationTermsDto;
import com.acm.server.repository.RegistrationTermsRepository;
import com.acm.server.service.RegistrationTermsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RegistrationTermsServiceImpl implements RegistrationTermsService {
    private final RegistrationTermsRepository repository;
    private final RegistrationTermsMapper mapper = RegistrationTermsMapper.INSTANCE;

    @Override
    public RegistrationTermsDto getTerms() {
        try {
            return repository.findAll().stream().map(mapper::toDto).toList().get(0);
        } catch (NullPointerException e) {
            log.error("Registration Terms table is empty!", e);
            return null;
        }
    }
}
