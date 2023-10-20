package com.acm.server.request;

import com.acm.server.model.TeamStatus;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UpdateStatusRequest {
    private Long teamId;
    private TeamStatus status;
    private boolean isInAmirkabir;
}
