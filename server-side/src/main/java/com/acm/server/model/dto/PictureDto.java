package com.acm.server.model.dto;

import lombok.Data;

/**
 * Picture DTO
 * link: Picture link on the server
 * @see com.acm.server.domain.picture.Picture
 * @author Farid Masjedi
 */
@Data
public class PictureDto {
    private Long id;

    private String link;
}
