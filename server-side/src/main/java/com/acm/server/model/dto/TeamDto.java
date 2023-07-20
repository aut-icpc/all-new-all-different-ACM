package com.acm.server.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class TeamDto {
    private Long id;

    private String teamName;

    private String institution;

    private List<ContestantDto> contestants;
}
