package com.acm.server.domain;

import com.acm.server.domain.picture.AboutUsPicture;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Farid Masjedi
 * description: This class is the entity for the about us
 */

@Entity
@Getter
@Setter
public class AboutUs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private AboutUsPicture picture;
}
