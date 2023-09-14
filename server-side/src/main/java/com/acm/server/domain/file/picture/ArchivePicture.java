package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * Archive Picture
 * @see Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("archive")
public class ArchivePicture extends Picture {
}
