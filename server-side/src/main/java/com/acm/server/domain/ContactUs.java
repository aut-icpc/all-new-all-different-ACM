package com.acm.server.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class ContactUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String instagram;
    @Column
    private String telegram;
    @Column
    private String email;
    @Column
    private String phoneNumber;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Point universityCoordinate;
}
