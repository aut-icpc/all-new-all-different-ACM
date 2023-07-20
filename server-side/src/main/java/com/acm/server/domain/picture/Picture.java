package com.acm.server.domain.picture;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Abstract base class representing a picture.
 * This class serves as a base class for specific picture types.
 *
 * @see com.acm.server.domain.picture.NationalIdPicture
 * @see com.acm.server.domain.picture.AboutUsPicture
 * @see com.acm.server.domain.picture.StudentCardPicture
 * @author Farid Masjedi
 */
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@Getter
@Setter
public abstract class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String link;
}
