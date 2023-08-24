package com.acm.server.domain;

import com.acm.server.model.TimelineType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Timeline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String title;
    @Column
    private Date date;
    @Column
    private String description;
    @Column
    @Enumerated(EnumType.STRING)
    private TimelineType type;

}
