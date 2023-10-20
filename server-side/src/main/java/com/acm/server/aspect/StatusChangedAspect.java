package com.acm.server.aspect;

import com.acm.server.domain.Contestant;
import com.acm.server.domain.Payment;
import com.acm.server.model.PaymentType;
import com.acm.server.model.TeamStatus;
import com.acm.server.model.dto.ContestantDto;
import com.acm.server.model.dto.TeamDto;
import com.acm.server.model.dto.zify.PayerDto;
import com.acm.server.model.dto.zify.PaymentDto;
import com.acm.server.model.dto.zify.ProductDto;
import com.acm.server.repository.ContestantRepository;
import com.acm.server.service.ContestantService;
import com.acm.server.service.PaymentService;
import com.acm.server.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * Aspect class for handling the status changed event.
 * This class is responsible for sending emails to contestants when the team status changes.
 *
 * This aspect is triggered after a method annotated with @StatusChangedEvent completes successfully.
 * It sends an email to each contestant in the team with the updated status information.
 *
 * This aspect is executed asynchronously using Spring's @Async annotation, allowing the calling method to continue
 * without waiting for the email notifications to be sent.
 *
 * The MailUtil class is used to send the emails.
 *
 * @author Farid Masjedi
 */
@Aspect
@Component
@RequiredArgsConstructor
public class StatusChangedAspect {
    private final MailUtil mailUtil;
    private final PaymentService paymentService;

    @Value("${payment.url}")
    private String paymentUrl;

    private final ContestantService contestantService;

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
        PaymentType paymentType;
        if (teamDto.getIsInAmirkabir())
            paymentType = PaymentType.AMIRKABIR;
        else {
            paymentType = PaymentType.NORMAL;
        }

        Payment payment = paymentService.paymentAmountByType(paymentType);

        if (status.equals(TeamStatus.WAITING_FOR_PAYMENT.name()))
            teamDto.getContestants().forEach(c -> readyForPayment(
                    c, payment
            ));

        // Email each contestant in the team
        teamDto.getContestants().forEach(c -> mailUtil.sendMailAfterStatusChanged(c.getEmail(), status, c.getLastname(),
                (payment).getAmount()));

    }

    private void readyForPayment(ContestantDto contestantDto, Payment payment) {
        contestantService.saveContestant(contestantDto.setOrderId(paymentService.createOrder(
                new PaymentDto()
                        .setPayerDto(
                                new PayerDto()
                                        .setEmail(contestantDto.getEmail())
                                        .setFirstName(contestantDto.getFirstname())
                                        .setLastName(contestantDto.getLastname())
                                        .setPhone(contestantDto.getPhoneNumber())
                        )
                        .setProductDto(
                                new ProductDto()
                                        .setAmount(payment.getAmount().toString())
                        ).setClientRefId(contestantDto.getId().toString())
                        .setReturnUrl(paymentUrl)
        )));
    }
}
