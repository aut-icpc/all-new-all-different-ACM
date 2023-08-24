package com.acm.server.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "acpc.contact-us")
public class ContactUsConfiguration {

    private String mail;
    private String instagram;
    private String telegram;
    private String phone;
    private String pointX;
    private String pointY;
}
