package com.acm.server.service.impl;

import com.acm.server.mapper.TeamMapper;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.repository.TeamRepository;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
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
