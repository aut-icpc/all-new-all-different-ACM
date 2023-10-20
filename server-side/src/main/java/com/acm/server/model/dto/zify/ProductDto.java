package com.acm.server.model.dto.zify;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ProductDto {
    private String code = "1";
    private String sellQuantity = "1";
    private String title = "ACPC Contest";
    private String amount;
    private boolean unlimited = true;
    private String quantity = "1";
    private String description = "ACPC Contest";
}
