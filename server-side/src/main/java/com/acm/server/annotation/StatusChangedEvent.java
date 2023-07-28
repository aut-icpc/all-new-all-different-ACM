package com.acm.server.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * Custom annotation for marking methods that trigger a status changed event.
 * This annotation is used to identify methods that indicate a change in team status.
 * It can be used in combination with aspects or listeners to perform additional actions
 * when the status of a team changes.
 *
 * @Retention(RetentionPolicy.RUNTIME) indicates that this annotation is retained at runtime,
 * allowing it to be accessed and used by runtime reflection mechanisms.
 *
 * @author Farid Masjedi
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface StatusChangedEvent {
    // This custom annotation does not require any elements or properties,
    // as it is intended to be a simple marker annotation.
}
