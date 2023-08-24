package com.acm.server.domain.file.picture;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * Abstract base class representing a picture.
 * This class serves as a base class for specific picture types.
 *
 * @author Farid Masjedi
 * @see NationalIdPicture
 * @see AboutUsPicture
 * @see StudentCardPicture
 */
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@Getter
@Setter
@Accessors(chain = true)
public abstract class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String link;
}
