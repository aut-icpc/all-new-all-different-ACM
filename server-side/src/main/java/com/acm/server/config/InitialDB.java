package com.acm.server.config;

import com.acm.server.domain.file.picture.AboutUsPicture;
import com.acm.server.repository.PictureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InitialDB implements CommandLineRunner {
    private final PictureRepository pictureRepository;
    private final HostConfiguration hostConfiguration;

    @Override
    public void run(String... args) {
        if (pictureRepository.count(Example.of(new AboutUsPicture())) == 0)
            initialAboutUsPicture();
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
