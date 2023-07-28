package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * Student Card Picture
 * @see Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("student_card")
public class StudentCardPicture extends Picture {

}
