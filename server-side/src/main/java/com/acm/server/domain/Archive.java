package com.acm.server.domain;

import com.acm.server.domain.file.File;
import com.acm.server.domain.file.picture.ArchivePicture;
import com.acm.server.domain.file.picture.EventDayPicture;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

/**
 * Entity class representing an archive in the system.
 * The Archive class represents archived data related to events or other entities.
 *
 * @author Farid Masjedi
 */
@Entity
@Getter
@Setter
public class Archive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Date date;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn
    private File questions;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn
    private File rankings;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn
    private List<EventDayPicture> eventDayPictures;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private ArchivePicture picture;
}
