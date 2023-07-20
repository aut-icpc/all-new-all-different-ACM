package com.acm.server.model.dto;

import lombok.Data;

/**
 * Countdown DTO
 * title: Countdown title
 * date: Countdown date
 * @see com.acm.server.domain.Countdown
 * @author Farid Masjedi
 */
@Data
public class CountdownDto {
    private Long id;
    private String title;
    private String date;
}
