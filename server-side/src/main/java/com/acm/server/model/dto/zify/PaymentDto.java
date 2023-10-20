package com.acm.server.model.dto.zify;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PaymentDto {
    private PayerDto payerDto;
    private ProductDto productDto;
    private String clientRefId;
    private String returnUrl;
    private String shippingTotal = "0";
    private String offTotal = "0";
    private String taxTotal = "0";
}
