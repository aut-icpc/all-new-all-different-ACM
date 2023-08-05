package com.acm.server.model.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ArchiveDto {
    private Long id;
    private Date date;
    private FileDto questions;
    private FileDto rankings;
    private List<PictureDto> eventDayPictures;
    private PictureDto poster;
}
