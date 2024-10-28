package com.acm.server.util;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.context.IContext;

/**
 * Mail util class
 *
 * @author Farid Masjedi
 */
@Component
@RequiredArgsConstructor
public class MailUtil {
    private final JavaMailSender emailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String from;

    /**
     * Sends an email after the status has changed.
     *
     * @param to     The recipient email address.
     * @param status The new status.
     * @param name   The name of the recipient.
     */
    public void sendMailAfterStatusChanged(String to, String status, String name, String orderId) {
        Context context = new Context();
        context.setVariable("name", name);
        context.setVariable("status", status);
        context.setVariable("payment", "https://api.payping.ir/v2/pay/gotoipg/".concat(orderId));
        sendThymeleafEmail(to, "acm-change-status", "ACPC Change Status", context);
    }

    /**
     * Sends a starting alert for the contest registration.
     *
     * @param to The recipient email address.
     */
    public void sendStartingAlertForTheContest(String to) {
        sendThymeleafEmail(to, "acm-alert-start", "ACPC Alert Start", new Context());
    }

    private void sendThymeleafEmail(String recipientEmail, String templateName, String subject,
                                    IContext context) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(from);
            helper.setTo(recipientEmail);
            helper.setSubject(subject);
            String htmlContent = templateEngine.process(templateName, context);
            helper.setText(htmlContent, true);
            emailSender.send(message);
        } catch (Exception e) {
            // Handle exception
        }
    }
}
