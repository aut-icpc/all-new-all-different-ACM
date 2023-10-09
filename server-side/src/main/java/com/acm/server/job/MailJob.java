package com.acm.server.job;

import com.acm.server.repository.MailRepository;
import com.acm.server.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Job class for sending starting alerts for contests via email.
 * This class is responsible for executing the mail sending job based on a scheduled time.
 * Requires a MailRepository for retrieving mail details and a MailUtil for sending emails.
 *
 * @author Farid Masjedi
 */
@Component
@RequiredArgsConstructor
public class MailJob {
    private final MailRepository mailRepository;
    private final MailUtil mailUtil;

    /**
     * Asynchronously sends starting alerts for contests via email based on the scheduled time.
     * The method is executed on a separate thread when triggered by the scheduler.
     */
    @Async
    @Scheduled(cron = "${comming-soon.mail.job}")
    public void mailJob() {
        // Retrieve all mails from the repository and send starting alerts for the contests
        mailRepository.findAll().forEach(mail ->
                mailUtil.sendStartingAlertForTheContest(mail.getValue()));
    }
}
