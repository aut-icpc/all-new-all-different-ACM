package com.acm.server.response;

import lombok.Data;

@Data
public class VerifyDataDto {
    private long paymentRefId;
    private int amount;
    private int clientRefId;

}
