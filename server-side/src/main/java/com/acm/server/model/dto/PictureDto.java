package com.acm.server.model.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Picture DTO
 * link: Picture link on the server
 * @see com.acm.server.domain.picture.Picture
 * @author Farid Masjedi
 */
@Data
public class PictureDto {
    private Long id;
    @NotBlank(message = "Link is required!")
    @Size(max = 500, message = "Link length must be less than 1000 characters!")
    private String link;
}
