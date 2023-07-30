package com.acm.server.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ArchiveDto {
    private Long id;
    private Date date;
    private PictureDto pictureDto;
}
