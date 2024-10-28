package com.acm.server.service;

import com.acm.server.domain.Payment;
import com.acm.server.model.PaymentType;
import com.acm.server.model.dto.zify.PaymentDto;

public interface PaymentService {
    String createOrder(PaymentDto paymentDto);
    Payment paymentAmountByType(PaymentType type);
    void verify(Long id, Long clientrefid);
}
