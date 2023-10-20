package com.acm.server.domain;

import com.acm.server.model.PaymentType;
import lombok.Data;

@Data
public class Payment {
    private PaymentType paymentType;
    private Integer amount;

}
