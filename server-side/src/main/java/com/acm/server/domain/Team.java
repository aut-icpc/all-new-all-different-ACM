package com.acm.server.domain;

import com.acm.server.model.TeamStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String teamName;

    @Column
    private String institution;

    @Column
    @Enumerated(value = EnumType.STRING)
    private TeamStatus status;

    @OneToMany
    private List<Contestant> contestants;
}
