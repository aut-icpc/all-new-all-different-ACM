package com.acm.server.mapper;

import com.acm.server.domain.Team;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.response.TeamBasicInformationResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Team Mapper
 * @see com.acm.server.domain.Team
 * @see com.acm.server.model.dto.TeamDto
 *
 * @author Farid Masjedi
 */
@Mapper
public interface TeamMapper {
    TeamMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(TeamMapper.class);

    TeamDto toTeamDto(Team team);

    Team toTeam(TeamDto teamDto);

    TeamBasicInformationResponse toBasicInformationResponse(Team team);
}
