package com.acm.server.model.dto;

import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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
    private Long id;
    @NotBlank(message = "Description is required!")
    @Size(max = 5000, message = "Description length must be less than 1000 characters!")
    private String description;
    @Valid
    private PictureDto picture;
}
