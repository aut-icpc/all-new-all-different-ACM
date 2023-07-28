package com.acm.server.aspect;

import com.acm.server.model.dto.TeamDto;
import com.acm.server.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

@Aspect
@Component
@EnableAsync
@RequiredArgsConstructor
public class StatusChangedAspect {
    private final MailUtil mailUtil;

    @Async
    @AfterReturning(value = "@annotation(com.acm.server.annotation.StatusChangedEvent)", returning = "teamDto")
    public void statusChangedHandler(TeamDto teamDto) {
        String status = teamDto.getStatus().name();
        teamDto.getContestants().forEach(c -> {
                mailUtil.sendMailAfterStatusChanged(c.getEmail(), status);
            }
        );
    }
}
