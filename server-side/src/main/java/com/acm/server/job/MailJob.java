package com.acm.server.job;

import com.acm.server.repository.MailRepository;
import com.acm.server.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MailJob {
    private final MailRepository mailRepository;

    private final MailUtil mailUtil;

    @Scheduled(cron = "30 10 18 7 * 2023")
    public void mailJob() {
        mailRepository.findAll().forEach(mail ->
            mailUtil.sendStartingAlertForTheContest(mail.getValue()));
    }
}
