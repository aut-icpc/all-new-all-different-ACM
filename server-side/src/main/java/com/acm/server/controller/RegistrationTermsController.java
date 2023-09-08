package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.RegistrationTermsDto;
import com.acm.server.service.RegistrationTermsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/terms")
@RequiredArgsConstructor
public class RegistrationTermsController {
    private final RegistrationTermsService service;

    @GetMapping
    public ResponseEntity<BaseResponseDto<RegistrationTermsDto>> getTerms() {
        return ResponseEntity.ok(
                new BaseResponseDto<>("terms has been returned successfully!",
                        service.getTerms())
        );
    }
}
