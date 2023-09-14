package com.acm.server.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author Farid Masjedi
 * This class is the entity for the countdown
 */

@Entity
@Getter
@Setter
public class Countdown {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Date date;
    @Enumerated(EnumType.STRING)
    private CountdownType type;
}
