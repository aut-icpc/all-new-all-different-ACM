package com.acm.server.repository;

import com.acm.server.domain.Payment;
import com.acm.server.model.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Optional<Payment> findByPaymentType(PaymentType paymentType);
}
