package com.acm.server.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Mail Entity to store emails
 *
 * @author Farid Masjedi
 */

@Entity
@Getter
@Setter
public class Mail {
    @Id
    private Long id;
    private String value;
}
