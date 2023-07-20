package com.acm.server.domain.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * Student Card Picture
 * @see com.acm.server.domain.picture.Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("student_card")
public class StudentCardPicture extends Picture {

}
