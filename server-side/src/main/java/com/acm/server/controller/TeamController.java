package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Farid Masjedi
 * description: This class is the controller for the team
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/team")
@RequiredArgsConstructor
public class TeamController {
    private final TeamService teamService;

    @PostMapping
    public ResponseEntity<BaseResponseDto<TeamDto>> createTeam(TeamDto teamDto) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "team created successfully!", teamService.createTeam(teamDto)));
    }

    @GetMapping
    public ResponseEntity<BaseResponseDto<TeamDto>> getTeam(Long id) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "team returned successfully!", teamService.getTeam(id)));
    }
}
