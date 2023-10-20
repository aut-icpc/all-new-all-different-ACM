package com.acm.server.model.dto;

import lombok.Data;

@Data
public class PaymentDto {
    private PayerDto payerDto;
    private ProductDto productDto;
    private String clientRefId;
    private String returnUrl;
}
