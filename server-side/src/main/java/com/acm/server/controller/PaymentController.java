package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/")
    public ResponseEntity<Void> verify(@RequestBody PaymentData paymentData) {
        try {
            String[] data = paymentData.getClientRefId().split("[\\+\\-]+");
            Long clientRefPart1 = Long.parseLong(data[0].trim());
            Long clientRefPart2 = Long.parseLong(data[1].trim());

            String code = paymentService.verify(
                Long.parseLong(paymentData.getPaymentRefId().trim()),
                clientRefPart1,
                clientRefPart2
            );

            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", "https://aut-acpc.com/payment_status/?status=success&code=" + code)
                    .build();

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", "https://aut-acpc.com/payment_status/?status=failed&code=" + e.getMessage())
                    .build();
        }
    }

    @Data
    public static class PaymentData {
        @JsonProperty("clientRefId")
        private String clientRefId;

        @JsonProperty("paymentCode")
        private String paymentCode;

        @JsonProperty("amount")
        private long amount;

        @JsonProperty("paymentRefId")
        private String paymentRefId;
        
        @JsonProperty("cardNumber")
        private String cardNumber;

        @JsonProperty("cardHashPan")
        private String cardHashPan;
    }
}
