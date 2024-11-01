package com.acm.server.service.impl;

import com.acm.server.domain.Contestant;
import com.acm.server.domain.Payment;
import com.acm.server.domain.Team;
import com.acm.server.exception.NotFoundException;
import com.acm.server.exception.PaymentException;
import com.acm.server.model.PaymentType;
import com.acm.server.model.TeamStatus;
import com.acm.server.model.dto.zify.PaymentDto;
import com.acm.server.repository.ContestantRepository;
import com.acm.server.repository.PaymentRepository;
import com.acm.server.repository.TeamRepository;
import com.acm.server.request.VerifyRequest;
import com.acm.server.response.CreateOrderResponse;
import com.acm.server.response.VerifyResponse;
import com.acm.server.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final RestTemplate restTemplate;
    private final PaymentRepository repository;
    private final ContestantRepository contestantRepository;
    private final TeamRepository teamRepository;

    @Override
    public String createOrder(PaymentDto paymentDto) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer "
                .concat("n3KA8IsfQ8Fsmq1AGSWPouSr5RXA2J5ezGFbRDgz5Oc"));

        HttpEntity<PaymentDto> requestEntity = new HttpEntity<>(paymentDto, headers);
        ResponseEntity<CreateOrderResponse> response =
                restTemplate.postForEntity("https://api.payping.ir/v2/pay", requestEntity, CreateOrderResponse.class);
        return response.getBody().getCode();

    }

    @Override
    public Payment paymentAmountByType(PaymentType type) {
        return repository.findByPaymentType(type).orElse(null);
    }

    @Override
    public String verify(Long refid, Long id, Long teamID) {
        Contestant contestant = contestantRepository.findById(id).orElse(null);
        if (Objects.isNull(contestant))
            throw new NotFoundException("contestant not found!");
        Team team = teamRepository.findById(teamID).orElse(null);
        if (Objects.isNull(team))
            throw new NotFoundException("team not found!");

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "bearer "
                .concat("n3KA8IsfQ8Fsmq1AGSWPouSr5RXA2J5ezGFbRDgz5Oc"));

        VerifyRequest request = new VerifyRequest();
        request.setRefid(refid.toString());
        PaymentType paymentType;
        if (team.getIsInAmirkabir())
            paymentType = PaymentType.AMIRKABIR;
        else {
            paymentType = PaymentType.NORMAL;
        }

        request.setAmount(paymentAmountByType(paymentType).getAmount());


        HttpEntity<VerifyRequest> requestEntity = new HttpEntity<>(request, headers);
        ResponseEntity<VerifyResponse> responseDto = restTemplate.postForEntity(
                "https://api.payping.ir/v2/pay/verify/", requestEntity, VerifyResponse.class
        );

        if (!responseDto.getStatusCode().is2xxSuccessful())
            throw new PaymentException(refid.toString());

        boolean allPaid = true;
        contestantRepository.save(contestant.setPaid(true));
        for (Contestant c : team.getContestants()) {
            allPaid = allPaid && c.getPaid();
        }
        if (allPaid)
            team.setStatus(TeamStatus.FINALIZED);

        teamRepository.save(team);
        return refid.toString();
    }
}
