package com.acm.server.model.dto;

import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * Archive DTO
 * @see com.acm.server.domain.Archive
 * @see com.acm.server.model.dto.PictureDto
 * @see com.acm.server.model.dto.FileDto
 *
 * @author Farid Masjedi
 */
@Data
public class ArchiveDto {
    private Long id;
    private Date date;
    private FileDto questions;
    private FileDto rankings;
    private List<PictureDto> eventDayPictures;
    private PictureDto poster;
}
