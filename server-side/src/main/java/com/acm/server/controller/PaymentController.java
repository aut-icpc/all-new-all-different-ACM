package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/")
    public ResponseEntity<Void> verify(
            @RequestParam(required = false) String clientrefid,
            @RequestParam(required = false) String refid) {
        try {
            String[] data = clientrefid.split("[\\+\\-]+");
            String code = paymentService.verify(
                    Long.parseLong(refid.trim()),
                    Long.parseLong(data[0].trim()),
                    Long.parseLong(data[1].trim())
            );

            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", Constants.BASE_CONTEST_API_URL + "/payment_status/?status=success&code="+code)
                    .build();

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header("Location", Constants.BASE_CONTEST_API_URL + "/payment_status/?status=failed&code="+e.getMessage())
                    .build();
        }
    }
}
