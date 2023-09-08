package com.acm.server.service;

import com.acm.server.model.dto.TeamDto;
import com.acm.server.request.UpdateStatusRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * @author Farid Masjedi
 * description: Team Service
 * @see com.acm.server.service.impl.TeamServiceImpl
 */

public interface TeamService {
    TeamDto createTeam(TeamDto teamDto);

    TeamDto getTeam(Long id);

    TeamDto getTeam(String name);

    TeamDto updateStatus(UpdateStatusRequest request);

    List<TeamDto> getTeams(Pageable pageable);

    boolean isNameUnique(String teamName);
}
