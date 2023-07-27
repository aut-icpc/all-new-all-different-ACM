package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling requests related to the team functionality.
 * This class is responsible for managing team-related operations.
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/team")
@RequiredArgsConstructor
public class TeamController {
    private final TeamService teamService;

    /**
     * Creates a new team.
     *
     * @param teamDto The TeamDto object containing the details of the team to be created.
     * @return ResponseEntity containing the response with the created TeamDto object.
     */
    @PostMapping
    public ResponseEntity<BaseResponseDto<TeamDto>> createTeam(@RequestBody TeamDto teamDto) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "Team created successfully!", teamService.createTeam(teamDto)));
    }

    /**
     * Retrieves the team information.
     *
     * @param id The ID of the team.
     * @return ResponseEntity containing the response with the TeamDto object.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<TeamDto>> getTeam(Long id) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "Team returned successfully!", teamService.getTeam(id)));
    }
}
