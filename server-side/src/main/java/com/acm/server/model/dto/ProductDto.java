package com.acm.server.model.dto;

import lombok.Data;

@Data
public class ProductDto {
    private String code = "1";
    private String sellQuantity = "1";
    private String title = "ACPC Contest";
    private String amount;
    private boolean unlimited = true;
    private String quantity = "1";
    private String description = "ACPC Contest";
}
