package com.acm.server.domain.file.picture;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("event_day")
public class EventDayPicture extends Picture {
}
