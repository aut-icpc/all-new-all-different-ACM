package com.acm.server.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class RegistrationTerms {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String localTerms;
    @Column
    private String foreignTerms;
    @Column
    private String moreDescriptions;
}
