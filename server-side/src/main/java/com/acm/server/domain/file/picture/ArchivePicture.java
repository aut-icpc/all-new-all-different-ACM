package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("archive")
public class ArchivePicture extends Picture{
}
