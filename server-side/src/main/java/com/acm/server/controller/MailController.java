package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.MailDto;
import com.acm.server.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(Constants.BASE_API_URL + "/mail")
public class MailController {
    private final MailService mailService;
    @PostMapping
    public ResponseEntity<BaseResponseDto<MailDto>> postMail(@RequestBody MailDto mailDto) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "Mail has been saved successfully!", mailService.saveMail(mailDto)
        ));
    }
}
