package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

/**
 * Event Day Picture
 * @see Picture
 * @author Farid Masjedi
 */
@Entity
@DiscriminatorValue("event_day")
public class EventDayPicture extends Picture {
}
