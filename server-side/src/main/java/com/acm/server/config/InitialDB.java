package com.acm.server.config;

import com.acm.server.domain.ContactUs;
import com.acm.server.domain.Point;
import com.acm.server.repository.ContactUsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InitialDB implements CommandLineRunner {
    private final ContactUsRepository contactUsRepository;
    private final ContactUsConfiguration contactUsConfiguration;

    @Override
    public void run(String... args) {
        contactUsRepository.deleteAll();

        ContactUs contactUs = new ContactUs()
                .setInstagram(contactUsConfiguration.getInstagram())
                .setTelegram(contactUsConfiguration.getTelegram())
                .setPhoneNumber(contactUsConfiguration.getPhone())
                .setEmail(contactUsConfiguration.getMail())
                .setUniversityCoordinate(new Point()
                        .setX(Double.parseDouble(contactUsConfiguration.getPointX()))
                        .setY(Double.parseDouble(contactUsConfiguration.getPointY())));

        contactUsRepository.save(contactUs);
    }
}
