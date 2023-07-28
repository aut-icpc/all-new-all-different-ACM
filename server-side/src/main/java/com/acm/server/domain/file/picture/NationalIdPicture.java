package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * National ID Picture
 * @see Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("national_id")
public class NationalIdPicture extends Picture {

}
