package com.acm.server.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity representing a shirt size.
 * A shirt size refers to the size or measurement of a shirt.
 * This entity stores information about a specific shirt size, including its unique identifier and size value.
 * <p>
 * The unique identifier is automatically generated using an identity column strategy.
 * The size field represents the name or description of the shirt size (e.g., small, medium, large).
 *
 * @author Farid Masjedi
 */
@Entity
@Getter
@Setter
public class ShirtSize {
    /**
     * The unique identifier of the shirt size.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The size value or description of the shirt size (e.g., small, medium, large).
     */
    private String size;
}
