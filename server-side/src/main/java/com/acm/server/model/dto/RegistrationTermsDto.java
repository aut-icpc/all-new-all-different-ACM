package com.acm.server.model.dto;

import lombok.Data;

@Data
public class RegistrationTermsDto {
    private Long id;
    private String localTerms;
    private String foreignTerms;
    private String moreDescriptions;
}
