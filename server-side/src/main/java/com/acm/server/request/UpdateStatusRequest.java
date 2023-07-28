package com.acm.server.request;

import com.acm.server.model.TeamStatus;
import lombok.Data;

@Data
public class UpdateStatusRequest {
    private Long teamId;
    private TeamStatus status;
}
