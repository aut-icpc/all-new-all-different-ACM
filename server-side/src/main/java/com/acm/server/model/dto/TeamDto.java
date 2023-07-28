package com.acm.server.model.dto;

import com.acm.server.model.TeamStatus;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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
    @NotBlank(message = "Team name is required!")
    @Size(max = 100, message = "Team name length must be less than 100 characters!")
    private String teamName;
    @NotBlank(message = "Institution is required!")
    @Size(max = 100, message = "Institution length must be less than 100 characters!")
    private String institution;
    private TeamStatus status;
    @NotNull(message = "Contestants is required!")
    @Valid
    private List<ContestantDto> contestants;
}
