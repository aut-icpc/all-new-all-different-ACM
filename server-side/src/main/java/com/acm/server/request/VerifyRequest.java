package com.acm.server.request;

import lombok.Data;

@Data
public class VerifyRequest {
    private String refid;
    private int amount;
}
