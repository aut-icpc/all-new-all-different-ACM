package com.acm.server.controller;


import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.CountdownDto;
import com.acm.server.service.CountdownService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Farid Masjedi
 * description: This class is the controller for the home page
 */

@RestController
@RequestMapping(Constants.BASE_API_URL + "/countdown")
@RequiredArgsConstructor
public class CountdownController {
    private final CountdownService countdownService;

    @GetMapping
    public ResponseEntity<BaseResponseDto<CountdownDto>> getCountdown(Long id) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "countdown returned successfully!", countdownService.getCountdown(id)));
    }
}
