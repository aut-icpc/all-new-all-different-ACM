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
    private String shipping_total = "0";
    private String off_total = "0";
    private String tax_total = "0";
}
