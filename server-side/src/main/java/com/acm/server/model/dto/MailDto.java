package com.acm.server.model.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
public class MailDto {
    private Long id;
    @NotBlank(message = "value is required!")
    @Pattern(regexp = "^\\S+@\\S+\\.\\S+$", message = "Mail is not valid!")
    private String value;
}
