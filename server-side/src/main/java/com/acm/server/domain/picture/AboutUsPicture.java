package com.acm.server.domain.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("about_us")
public class AboutUsPicture extends Picture{
}
