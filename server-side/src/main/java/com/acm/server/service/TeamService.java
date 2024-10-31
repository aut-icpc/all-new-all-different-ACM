package com.acm.server.service;

import com.acm.server.model.dto.ContestantDto;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.model.dto.TeamPageDto;
import com.acm.server.request.UpdateStatusRequest;
import com.acm.server.response.TeamBasicInformationResponse;
import org.springframework.data.domain.Pageable;

/**
 * @author Farid Masjedi
 * description: Team Service
 * @see com.acm.server.service.impl.TeamServiceImpl
 */

public interface TeamService {
    TeamDto createTeam(TeamDto teamDto);

    TeamDto getTeam(Long id);

    TeamDto getTeam(String name);

    TeamBasicInformationResponse getTeamBasicInformation(String name);
    TeamBasicInformationResponse getTeamBasicInformation(Long id);


    TeamDto updateStatus(UpdateStatusRequest request);

    TeamPageDto getTeams(Pageable pageable);

    boolean isNameUnique(String teamName);

    TeamDto saveContestant(TeamDto dto);
}
