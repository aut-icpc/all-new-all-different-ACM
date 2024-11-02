package com.acm.server.response;

import lombok.Data;

@Data
public class CreateOrderResponse {
    private String paymentCode;
    private String url;
    private long amount;
}
