package com.acm.server.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ArchiveDto {
    private Date date;
    private PictureDto pictureDto;
}
