package com.acm.server.model.dto.zify;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class PaymentDto {
    private int amount;
    private String payerIdentity;
    private String payerName;
    private String description;
    private String returnUrl;
    private String clientRefId;
}
