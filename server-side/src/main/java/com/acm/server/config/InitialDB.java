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

    @Override
    public void run(String... args) {
        if (contactUsRepository.count() == 0) {
            ContactUs contactUs = new ContactUs()
                    .setInstagram("https://www.instagram.com/acpc.2023/")
                    .setTelegram("https://t.me/acpcp_admin")
                    .setPhoneNumber("+989011521493")
                    .setUniversityCoordinate(new Point()
                            .setX(35.70385)
                            .setY(51.40833));

            contactUsRepository.save(contactUs);
        }
    }
}
