package com.acm.server.model.dto.zify;

import lombok.Data;

@Data
public class CreateOrderResponseDto {
    private int Amount;
    // private String PayerIdentity;
    // private String PayerName;
    // private String Description;
    private String ReturnUrl;
    private String ClientRefId;
}
