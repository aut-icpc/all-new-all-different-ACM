package com.acm.server.domain;

import com.acm.server.domain.picture.NationalIdPicture;
import com.acm.server.domain.picture.StudentCardPicture;
import com.acm.server.model.Gender;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Entity representing a contestant participating in a contest.
 * A contestant is an individual who is registered to participate in a contest.
 * This entity stores information about the contestant, such as their personal details,
 * contact information, graduation level, shirt size, and associated pictures.
 * <p>
 * The contestant's personal details include their first name, last name, and gender.
 * Contact information includes their phone number and email address, both of which are unique.
 * The contestant's graduation level and shirt size are represented by associated entities.
 * The contestant may also have a student ID, which is an optional field.
 * <p>
 * The contestant's pictures include a national ID picture and a student card picture,
 * both of which are represented by associated entities.
 *
 * @author Farid Masjedi
 */
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
