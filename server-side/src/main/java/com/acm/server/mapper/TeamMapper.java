package com.acm.server.mapper;

import com.acm.server.domain.Team;
import com.acm.server.model.dto.TeamDto;
import org.mapstruct.Mapper;

@Mapper
public interface TeamMapper {
    TeamMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(TeamMapper.class);

    TeamDto toTeamDto(Team team);

    Team toTeam(TeamDto teamDto);
}
