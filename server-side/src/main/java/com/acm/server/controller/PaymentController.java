package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/")
    public ResponseEntity<String> verify(
            @RequestParam(required = false) String clientrefid,
            @RequestParam(required = false) String refid) {
        String[] data = clientrefid.split("[\\+\\-]+");
        paymentService.verify(Long.parseLong(refid.trim()), Long.parseLong(data[0].trim()), Long.parseLong(data[1].trim()));
        return ResponseEntity.ok("verified");
    }
}
