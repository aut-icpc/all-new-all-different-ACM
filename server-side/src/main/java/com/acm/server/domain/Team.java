package com.acm.server.domain;

import com.acm.server.model.TeamStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Represents a team in the ACPC
 * @author Farid Masjedi
 */
@Entity
@Getter
@Setter
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The name of the team.
     * This field is unique and serves as the identifier for the team.
     */
    @Column(unique = true)
    private String teamName;

    /**
     * The institution associated with the team.
     * This field represents the educational institution or organization to which the team belongs.
     */
    @Column
    private String institution;

    /**
     * The status of the team.
     * This field indicates the current status of the team, such as "Active", "Inactive", or "Disqualified".
     */
    @Column
    @Enumerated(value = EnumType.STRING)
    private TeamStatus status;

    /**
     * The list of contestants in the team.
     * This field contains the contestants who are members of the team.
     */
    @OneToMany(cascade = CascadeType.ALL)
    private List<Contestant> contestants;

    @Column
    private Boolean isInAmirkabir = false;

    @Column
    private String orderId;
}
