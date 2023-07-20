package com.acm.server.domain.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * About Us Picture
 * @see com.acm.server.domain.picture.Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("about_us")
public class AboutUsPicture extends Picture{
}
