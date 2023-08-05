package com.acm.server.model.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class FileDto {
    private Long id;
    @NotBlank(message = "Link is required!")
    @Size(max = 500, message = "Link length must be less than 1000 characters!")
    private String link;
}
