package com.acm.server.response;

import com.acm.server.model.TeamStatus;
import lombok.Data;

@Data
public class TeamBasicInformationResponse {
    private Long id;
    private String teamName;
    private TeamStatus status;
    private String institution;
}
