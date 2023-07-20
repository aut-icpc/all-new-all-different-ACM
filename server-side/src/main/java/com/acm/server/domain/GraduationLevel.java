package com.acm.server.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity representing a graduation level.
 * A graduation level refers to the level of education or academic achievement attained by an individual.
 * This entity stores information about a specific graduation level, including its unique identifier and value.
 * <p>
 * The unique identifier is automatically generated using an identity column strategy.
 * The value field represents the name or description of the graduation level.
 *
 * @author Farid Masjedi
 */
@Entity
@Getter
@Setter
public class GraduationLevel {
    /**
     * The unique identifier of the graduation level.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The value or description of the graduation level.
     */
    private String value;
}
