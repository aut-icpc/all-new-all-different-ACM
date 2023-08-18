package com.acm.server.service.impl;

import com.acm.server.mapper.MailMapper;
import com.acm.server.model.dto.MailDto;
import com.acm.server.repository.MailRepository;
import com.acm.server.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {
    private final MailRepository mailRepository;
    private final MailMapper mapper = MailMapper.INSTANCE;

    @Override
    public MailDto saveMail(MailDto mailDto) {
        return mapper.toDto(mailRepository.save(mapper.toEntity(mailDto)));
    }
}
