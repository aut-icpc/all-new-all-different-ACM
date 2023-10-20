package com.acm.server.model.dto;

import lombok.Data;

@Data
public class PayerDto {
    private String first_name;
    private String last_name;
    private String phone;
    private String email;
}
