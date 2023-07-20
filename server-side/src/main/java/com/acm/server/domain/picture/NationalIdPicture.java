package com.acm.server.domain.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * National ID Picture
 * @see com.acm.server.domain.picture.Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("national_id")
public class NationalIdPicture extends Picture {

}
