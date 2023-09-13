package com.acm.server.aspect;

import com.acm.server.model.dto.TeamDto;
import com.acm.server.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * Aspect class for handling the status changed event.
 * This class is responsible for sending emails to contestants when the team status changes.
 *
 * @author Farid Masjedi
 */
@Aspect
@Component
@RequiredArgsConstructor
public class StatusChangedAspect {
    private final MailUtil mailUtil;

    /**
     * Handles the status changed event after a method annotated with @StatusChangedEvent completes successfully.
     *
     * @param teamDto The TeamDto object containing the updated team information.
     */
    @Async
    @AfterReturning(value = "@annotation(com.acm.server.annotation.StatusChangedEvent)", returning = "teamDto")
    public void statusChangedHandler(TeamDto teamDto) {
        // Get the new status of the team
        String status = teamDto.getStatus().name();

        // Email each contestant in the team
        teamDto.getContestants().forEach(c -> mailUtil.sendMailAfterStatusChanged(c.getEmail(), status, c.getLastname()));
    }
}
