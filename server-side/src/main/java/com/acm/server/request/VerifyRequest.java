package com.acm.server.request;

import lombok.Data;

@Data
public class VerifyRequest {
    private long paymentRefId;
    private int amount;
}
