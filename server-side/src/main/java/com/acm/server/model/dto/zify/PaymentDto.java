package com.acm.server.model.dto.zify;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class PaymentDto {
    private int Amount;
    private String PayerIdentity;
    private String PayerName;
    private String Description;
    private String ReturnUrl;
    private String ClientRefId;
}
