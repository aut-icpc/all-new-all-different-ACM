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

@Component
@RequiredArgsConstructor
public class MailUtil {
    private final JavaMailSender emailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String from;


    public void sendMailAfterStatusChanged(String to, String status, String name) {
        Context context = new Context();
        context.setVariable("name", name);
        context.setVariable("status", status);
        sendThymeleafEmail(to,
                "acm-change-status", "ACPC Change Status", context);
    }

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
