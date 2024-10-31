package com.acm.server.service.impl;

import com.acm.server.annotation.StatusChangedEvent;
import com.acm.server.domain.Team;
import com.acm.server.mapper.TeamMapper;
import com.acm.server.model.TeamStatus;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.model.dto.TeamPageDto;
import com.acm.server.repository.TeamRepository;
import com.acm.server.request.UpdateStatusRequest;
import com.acm.server.response.TeamBasicInformationResponse;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation of the TeamService interface.
 *
 * @author Farid Masjedi
 */
@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {
    private final TeamRepository teamRepository;
    private final TeamMapper mapper = TeamMapper.INSTANCE;

    /**
     * Creates a new team.
     *
     * @param teamDto The team DTO object containing the team details.
     * @return The created team DTO object.
     */
    @Override
    @StatusChangedEvent
    public TeamDto createTeam(TeamDto teamDto) {
        // Save the team to the repository and convert it to a DTO using the mapper
        teamDto.setStatus(TeamStatus.REGISTERED);
        return mapper.toTeamDto(teamRepository.save(mapper.toTeam(teamDto)));
    }

    /**
     * Retrieves a team by its ID.
     *
     * @param id The ID of the team to retrieve.
     * @return The team DTO object.
     * @throws java.util.NoSuchElementException if the team with the specified ID is not found.
     */
    @Override
    public TeamDto getTeam(Long id) {
        // Find the team in the repository by its ID and convert it to a DTO using the mapper
        return mapper.toTeamDto(teamRepository.findById(id).orElseThrow());
    }

    @Override
    public TeamDto getTeam(String name) {
        return mapper.toTeamDto(teamRepository.getTeamByTeamName(name));
    }

    @Override
    public TeamBasicInformationResponse getTeamBasicInformation(String name) {
        return mapper.toBasicInformationResponse(teamRepository.getTeamByTeamName(name));
    }

    @Override
    public TeamBasicInformationResponse getTeamBasicInformation(Long id) {
        return mapper.toBasicInformationResponse(teamRepository.findById(id).orElseThrow());
    }


    @Override
    @StatusChangedEvent
    public TeamDto updateStatus(UpdateStatusRequest request) {
        teamRepository.updateStatus(request);
        return mapper.toTeamDto(teamRepository.findById(request.getTeamId()).orElse(null)).setIsInAmirkabir(
                request.getIsInAmirkabir()
        );
    }

    @Override
    public TeamPageDto getTeams(Pageable pageable) {
        List<TeamDto> teamDtos = teamRepository.findAll(pageable).map(mapper::toTeamDto).toList();
        long totalRecords = teamRepository.count();
        return new TeamPageDto(totalRecords, teamDtos);
    }

    @Override
    public boolean isNameUnique(String teamName) {
        return !teamRepository.isNameExist(teamName);
    }

    @Override
    public TeamDto saveContestant(TeamDto teamDto) {
        return mapper.toDto(teamRepository.save(mapper.toTeam(teamDto)));
    }
}
