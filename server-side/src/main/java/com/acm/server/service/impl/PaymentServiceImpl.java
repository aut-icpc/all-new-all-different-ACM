package com.acm.server.service.impl;

import com.acm.server.domain.Contestant;
import com.acm.server.domain.Payment;
import com.acm.server.exception.NotFoundException;
import com.acm.server.exception.PaymentException;
import com.acm.server.model.PaymentType;
import com.acm.server.model.dto.zify.CreateOrderResponseDto;
import com.acm.server.model.dto.zify.PaymentDto;
import com.acm.server.model.dto.zify.ZifyResponseDto;
import com.acm.server.repository.ContestantRepository;
import com.acm.server.repository.PaymentRepository;
import com.acm.server.service.PaymentService;
import lombok.RequiredArgsConstructor;
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

    @Override
    public String createOrder(PaymentDto paymentDto) {
        ResponseEntity<ZifyResponseDto> responseDto =
                restTemplate.postForEntity("https://zify.ir/api/v2/order/create", paymentDto, ZifyResponseDto.class);
        return ((CreateOrderResponseDto) responseDto.getBody().getData()).getOrder();

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

        ResponseEntity<ZifyResponseDto> responseDto = restTemplate.postForEntity(
                "https://zify.ir/api/order/verify", contestant.getOrderId(), ZifyResponseDto.class
        );

        if (!responseDto.getStatusCode().is2xxSuccessful())
            throw new PaymentException();

        contestantRepository.save(contestant.setPaid(true));
    }
}
