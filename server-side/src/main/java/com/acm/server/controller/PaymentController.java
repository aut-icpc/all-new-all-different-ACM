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
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;
// import org.springframework.web.bind.annotation.RequestBody;
import java.util.Map;

import lombok.Data;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

@PostMapping("/")
public ResponseEntity<PaymentResponse> verify(@RequestParam int status, @RequestParam(required = false) Integer errorCode, @RequestParam String data) {
    PaymentResponse response = new PaymentResponse();

        String code = "";
        String returnCode = "";
        System.out.println(data);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            // Convert the JSON string to PaymentInfo object
            PaymentData pi = objectMapper.readValue(data, PaymentData.class);
            returnCode = pi.getPaymentCode();
            String[] splitData = pi.getClientRefId().split("[\\+\\-]+");
            Long clientRefPart1 = Long.parseLong(splitData[0].trim());
            Long clientRefPart2 = Long.parseLong(splitData[1].trim());


            code = paymentService.verify(
            pi.getPaymentRefId(),
            clientRefPart1,
            clientRefPart2
        );


        System.out.println(code);
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", "https://aut-acpc.com/payment_status/?status=success&code="+returnCode)
                    .build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", "https://aut-acpc.com/payment_status/?status=failed&code="+returnCode)
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

    @JsonProperty("paymentRefId")  // Ensure this matches the JSON
    private long paymentRefId;

    @JsonProperty("cardNumber")
    private String cardNumber;

    @JsonProperty("cardHashPan")
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
