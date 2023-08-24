package com.acm.server.model.dto;

import com.acm.server.model.TimelineType;
import lombok.Data;

import java.util.Date;

@Data
public class TimelineDto {
    private Long id;
    private String title;
    private Date date;
    private String description;
    private TimelineType type;
}
