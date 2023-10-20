package com.acm.server.domain;

import com.acm.server.model.PaymentType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class Payment {
    @Id
    private Long id;

    @Column
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

    @Column
    private Integer amount;

}
