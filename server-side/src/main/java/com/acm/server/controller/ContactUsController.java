package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.ContactUsDto;
import com.acm.server.service.ContactUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/contact-us")
@RequiredArgsConstructor
public class ContactUsController {
    private final ContactUsService contactUsService;

    @GetMapping
    public ResponseEntity<BaseResponseDto<ContactUsDto>> getContactUs() {
        return ResponseEntity.ok(
                new BaseResponseDto<>("contact us has been returned successfully!",
                        contactUsService.getContactUs())
        );
    }
}
