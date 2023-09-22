package com.acm.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class TeamPageDto {
    private long totalRecords;
    private List<TeamDto> teamDtos;
}
