package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.AboutUsDto;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.service.AboutUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(Constants.BASE_API_URL + "/about")
@RequiredArgsConstructor
public class AboutUsController {
    private final AboutUsService aboutUsService;

    @GetMapping
    public ResponseEntity<BaseResponseDto<List<AboutUsDto>>> getAboutUs() {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "about us returned successfully!", aboutUsService.getAboutUs()));
    }

}
