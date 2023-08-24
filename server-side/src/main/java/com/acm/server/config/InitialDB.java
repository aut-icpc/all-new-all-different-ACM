package com.acm.server.config;

import com.acm.server.domain.ContactUs;
import com.acm.server.domain.Point;
import com.acm.server.domain.file.picture.AboutUsPicture;
import com.acm.server.repository.ContactUsRepository;
import com.acm.server.repository.PictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InitialDB implements CommandLineRunner {
    private final ContactUsRepository contactUsRepository;
    private final PictureRepository pictureRepository;
    private final ContactUsConfiguration contactUsConfiguration;
    private final HostConfiguration hostConfiguration;

    @Override
    public void run(String... args) {
        if (contactUsRepository.count() == 0)
            initialContactUs();

        if (pictureRepository.count(Example.of(new AboutUsPicture())) == 0)
            initialAboutUsPicture();
    }

    private void initialContactUs() {
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

    private void initialAboutUsPicture() {
        for (int i = 1; i <= 4; i++) {
            pictureRepository.save((AboutUsPicture) new AboutUsPicture()
                    .setLink("http://" + hostConfiguration.getName() + ":" +
                            hostConfiguration.getPort() +
                            "/src/main/resources/pictures/about-us/" + i + ".JPG"));
        }
    }
}
