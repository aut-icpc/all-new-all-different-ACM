package com.acm.server.model.dto;

import lombok.Data;

import java.util.List;

/**
 * Team DTO
 * teamName: Team name
 * institution: Team institution
 * contestants: List of contestants
 * @see com.acm.server.domain.Team
 * @author Farid Masjedi
 */
@Data
public class TeamDto {
    private Long id;

    private String teamName;

    private String institution;

    private List<ContestantDto> contestants;
}
