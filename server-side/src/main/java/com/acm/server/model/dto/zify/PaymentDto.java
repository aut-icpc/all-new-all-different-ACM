package com.acm.server.model.dto.zify;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class PaymentDto {
    private PayerDto payer;
    private List<ProductDto> products;
    private String clientRefId;
    private String returnUrl;
    private String shippingTotal = "0";
    private String offTotal = "0";
    private String taxTotal = "0";
}
