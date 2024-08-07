package com.acm.server.response;

import lombok.Data;

@Data
public class VerifyDataDto {
    private String amount;
    private String refId;
    private String cardNumber;
}
