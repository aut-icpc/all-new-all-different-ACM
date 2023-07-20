package com.acm.server.model.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

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
    @NotBlank(message = "Title is required!")
    @Size(max = 50, message = "Title length must be less than 1000 characters!")
    private String title;
    @NotNull(message = "Date is required!")
    private Date date;
}
