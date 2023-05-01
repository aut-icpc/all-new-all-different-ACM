package com.acm.server.service;

import com.acm.server.mapper.TeamMapper;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.repository.TeamRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {
    private final TeamRepository teamRepository;

    private final TeamMapper mapper = TeamMapper.INSTANCE;


    @Override
    public TeamDto createTeam(TeamDto teamDto) {
        return mapper.toTeamDto(teamRepository.save(mapper.toTeam(teamDto)));
    }

    @Override
    public TeamDto getTeam(Long id) {
        return mapper.toTeamDto(teamRepository.findById(id).orElseThrow());
    }
}
