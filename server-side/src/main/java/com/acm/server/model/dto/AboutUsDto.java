package com.acm.server.model.dto;

import lombok.Data;

/**
 * About Us DTO
 * description: About Us Data Transfer Object
 * @see com.acm.server.domain.AboutUs
 * @see com.acm.server.model.dto.PictureDto
 *
 * @author Farid Masjedi
 */
@Data
public class AboutUsDto {
    private String description;
    private PictureDto picture;
}
