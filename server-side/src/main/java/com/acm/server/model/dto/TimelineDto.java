package com.acm.server.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class TimelineDto {
    private Long id;
    private Date date;
    private String description;
}
