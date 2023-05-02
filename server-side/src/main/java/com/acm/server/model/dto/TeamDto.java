package com.acm.server.model.dto;

import com.acm.server.domain.Contestant;
import lombok.Data;

import java.util.List;

@Data
public class TeamDto {
    private Long id;

    private String teamName;

    private String institution;

    private List<Contestant> contestants;
}
