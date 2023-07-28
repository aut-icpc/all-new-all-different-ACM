package com.acm.server.service;

import com.acm.server.model.dto.TeamDto;
import com.acm.server.request.UpdateStatusRequest;

/**
 * @author Farid Masjedi
 * description: Team Service
 * @see com.acm.server.service.impl.TeamServiceImpl
 */

public interface TeamService {
    TeamDto createTeam(TeamDto teamDto);

    TeamDto getTeam(Long id);

    TeamDto updateStatus(UpdateStatusRequest request);
}
