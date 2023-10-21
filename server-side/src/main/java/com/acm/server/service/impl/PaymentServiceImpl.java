package com.acm.server.service.impl;

import com.acm.server.domain.Contestant;
import com.acm.server.domain.Payment;
import com.acm.server.exception.NotFoundException;
import com.acm.server.exception.PaymentException;
import com.acm.server.model.PaymentType;
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
                .concat("3ac73ec2cfbad095050990db310f49ad01334d04c6abd1231342ee5fca323251"));

        HttpEntity<PaymentDto> requestEntity = new HttpEntity<>(paymentDto, headers);
        ResponseEntity<CreateOrderResponse> response =
                restTemplate.postForEntity("https://zify.ir/api/order/v2/create", requestEntity, CreateOrderResponse.class);
        return response.getBody().getData().getOrder();

    }

    @Override
    public Payment paymentAmountByType(PaymentType type) {
        return repository.findByPaymentType(type).orElse(null);
    }

    @Override
    public void verify(Long id) {
        Contestant contestant = contestantRepository.findById(id).orElse(null);
        if (Objects.isNull(contestant))
            throw new NotFoundException("contestant not found!");

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer "
                .concat("3ac73ec2cfbad095050990db310f49ad01334d04c6abd1231342ee5fca323251"));

        VerifyRequest request = new VerifyRequest();
        request.setOrder(contestant.getOrderId());

        HttpEntity<VerifyRequest> requestEntity = new HttpEntity<>(request, headers);

        ResponseEntity<VerifyResponse> responseDto = restTemplate.postForEntity(
                "https://zify.ir/api/order/v2/verify", requestEntity, VerifyResponse.class
        );

        if (!responseDto.getStatusCode().is2xxSuccessful())
            throw new PaymentException();

        contestantRepository.save(contestant.setPaid(true));
    }
}
