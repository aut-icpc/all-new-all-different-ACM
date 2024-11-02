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
import org.springframework.web.bind.annotation.RequestParam;
import com.fasterxml.jackson.databind.ObjectMapper;
// import org.springframework.web.bind.annotation.RequestBody;
import java.util.Map;

import lombok.Data;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

@PostMapping("/")
public ResponseEntity<PaymentResponse> verify(@RequestParam String data) {
    PaymentResponse response = new PaymentResponse();
    ObjectMapper objectMapper = new ObjectMapper();

    try {
        // Parse the JSON string into a Map
        Map<String, Object> dataMap = objectMapper.readValue(data, Map.class);

        String clientRefId = (String) dataMap.get("clientRefId");
        String paymentCode = (String) dataMap.get("paymentCode");
        long amount = Long.parseLong(dataMap.get("amount").toString());
        Long paymentRefId = (Long) dataMap.get("paymentRefId");

        String[] splitData = clientRefId.split("[\\+\\-]+");
        Long clientRefPart1 = Long.parseLong(splitData[0].trim());
        Long clientRefPart2 = Long.parseLong(splitData[1].trim());

        String code = paymentService.verify(
            Long.parseLong(paymentRefId),
            clientRefPart1,
            clientRefPart2
        );

        response.setStatus(1);
        response.setErrorCode(null);

        return ResponseEntity.ok(response);

    } catch (Exception e) {
        response.setStatus(0);
        response.setErrorCode(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
    @Data
    public static class PaymentData {
        @JsonProperty("ClientRefId")
        private String clientRefId;

        @JsonProperty("PaymentCode")
        private String paymentCode;

        @JsonProperty("Amount")
        private long amount;

        @JsonProperty("PaymentRefId")
        private String paymentRefId;
        
        @JsonProperty("CardNumber")
        private String cardNumber;

        @JsonProperty("CardHashPan")
        private String cardHashPan;
    }

    @Data
    public static class PaymentResponse {
        @JsonProperty("Status")
        private int status;

        @JsonProperty("ErrorCode")
        private String errorCode;
    }
}
