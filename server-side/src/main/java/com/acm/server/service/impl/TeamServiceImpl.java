package com.acm.server.service.impl;

import com.acm.server.mapper.TeamMapper;
import com.acm.server.model.TeamStatus;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.repository.TeamRepository;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Implementation of the TeamService interface.
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
}
