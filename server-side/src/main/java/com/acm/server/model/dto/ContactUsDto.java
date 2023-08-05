package com.acm.server.model.dto;

import lombok.Data;

@Data
public class ContactUsDto {
    private Long id;
    private String instagram;
    private String telegram;
    private String email;
    private String phoneNumber;

}
