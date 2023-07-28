package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * About Us Picture
 * @see Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("about_us")
public class AboutUsPicture extends Picture {
}
