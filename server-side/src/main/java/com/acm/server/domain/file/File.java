package com.acm.server.domain.file;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Base class representing a file in the system.
 * The File class serves as a base class for different types of files used in the system.
 * It provides common properties and behaviors related to files.
 *
 * @author Farid Masjedi
 */
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@Getter
@Setter
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String link;
}