package com.acm.server.domain.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("student_card")
public class StudentCardPicture extends Picture {

}
