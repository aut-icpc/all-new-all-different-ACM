package com.acm.server.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;

@Entity
@Getter
@Setter
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
    @Column
    private Point universityCoordinate;
}
