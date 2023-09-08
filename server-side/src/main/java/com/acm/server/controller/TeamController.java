package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.request.UpdateStatusRequest;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for handling requests related to the team functionality.
 * This class is responsible for managing team-related operations.
 * The base URL for this controller is "{@value Constants#BASE_API_URL}/team".
 * Requires a TeamService instance for processing team-related requests.
 *
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
        // Create the team using the provided TeamDto and get the created team details
        TeamDto createdTeamDto = teamService.createTeam(teamDto);

        // Return the response entity with the created team data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Team created successfully!", createdTeamDto));
    }

    /**
     * Retrieves the team information based on the provided team ID.
     *
     * @param id The ID of the team to retrieve.
     * @return ResponseEntity containing the response with the TeamDto object.
     */
    @GetMapping("/{id}")
    public ResponseEntity<BaseResponseDto<TeamDto>> getTeam(@PathVariable Long id) {
        // Retrieve the team from the service layer based on the provided ID
        TeamDto teamDto = teamService.getTeam(id);

        // Return the response entity with the team data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Team returned successfully!", teamDto));
    }

    /**
     * Retrieves the team information based on the provided team name.
     *
     * @param name The name of the team to retrieve.
     * @return ResponseEntity containing the response with the TeamDto object.
     */
    @GetMapping("/{name}")
    public ResponseEntity<BaseResponseDto<TeamDto>> getTeam(@PathVariable String name) {
        // Retrieve the team from the service layer based on the provided name
        TeamDto teamDto = teamService.getTeam(name);

        // Return the response entity with the team data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Team returned successfully!", teamDto));
    }

    /**
     * Updates the status of a team based on the provided UpdateStatusRequest object.
     *
     * @param request The UpdateStatusRequest object containing the team name and the new status.
     * @return ResponseEntity containing the response with BaseResponseDto holding the TeamDto with updated status.
     */
    @PutMapping("/status")
    public ResponseEntity<BaseResponseDto<TeamDto>> updateStatus(UpdateStatusRequest request) {
        // Update the status of the team based on the provided request
        TeamDto updatedTeamDto = teamService.updateStatus(request);

        // Return the response entity with the updated team data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Team status updated successfully!", updatedTeamDto));
    }

    /**
     * Checks if the provided team name is unique.
     *
     * @param teamName The name of the team to check for uniqueness.
     * @return ResponseEntity containing the response with a Boolean indicating the uniqueness of the team name.
     */
    @GetMapping("/name/unique")
    public ResponseEntity<Boolean> isNameUnique(String teamName) {
        // Check if the provided team name is unique using the service layer method
        boolean isUnique = teamService.isNameUnique(teamName);

        // Return the response entity with the Boolean result indicating the uniqueness of the team name
        return ResponseEntity.ok(isUnique);
    }

    @GetMapping
    public ResponseEntity<BaseResponseDto<List<TeamDto>>> getTeam(Pageable page) {
        // Return the response entity with the team data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Team returned successfully!",
                teamService.getTeams(page)));
    }
}
