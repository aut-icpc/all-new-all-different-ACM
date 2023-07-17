package com.acm.server.service;

import com.acm.server.model.dto.TeamDto;
import org.springframework.stereotype.Service;

/**
 * @author Farid Masjedi
 * description: Team Service
 */

public interface TeamService {
    TeamDto createTeam(TeamDto teamDto);

    TeamDto getTeam(Long id);
}
