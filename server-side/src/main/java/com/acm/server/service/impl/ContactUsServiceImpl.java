package com.acm.server.service.impl;

import com.acm.server.mapper.ContactUsMapper;
import com.acm.server.model.dto.ContactUsDto;
import com.acm.server.repository.ContactUsRepository;
import com.acm.server.service.ContactUsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactUsServiceImpl implements ContactUsService {
    private final ContactUsRepository repository;
    private final ContactUsMapper mapper = ContactUsMapper.INSTANCE;

    @Override
    public ContactUsDto getContactUs() {
        try {
//            var test = new ContactUs();
//            test.setEmail("ceaut.acpc@gmail.com");
//            test.setInstagram("https://www.instagram.com/acpc.2023/");
//            test.setTelegram("https://t.me/acpc_admin");
//            test.setUniversityCoordinate(new Point(35.70385,51.40833));
//            test.setPhoneNumber("+989011521493");
//            repository.save(test);
            return repository.findAll().stream().map(mapper::toDto).toList().get(0);
        } catch (NullPointerException e) {
            log.error("Contact Us table is empty!", e);
            return null;
        }
    }
}
