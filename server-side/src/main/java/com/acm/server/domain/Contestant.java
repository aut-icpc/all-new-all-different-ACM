package com.acm.server.domain;

import com.acm.server.domain.picture.NationalIdPicture;
import com.acm.server.domain.picture.StudentCardPicture;
import com.acm.server.model.Gender;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Contestant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    @Column(unique = true)
    private String phoneNumber;

    @Column(unique = true)
    private String email;

    @ManyToOne
    @JoinColumn
    private GraduationLevel graduationLevel;

    @ManyToOne
    @JoinColumn
    private ShirtSize shirtSize;

    @Column
    private String studentId;

    @OneToOne
    @JoinColumn
    private NationalIdPicture nationalIdPicture;

    @OneToOne
    @JoinColumn
    private StudentCardPicture studentCardPicture;
}
