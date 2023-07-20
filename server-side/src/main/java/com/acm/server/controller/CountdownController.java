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
 * Controller class for handling requests related to the countdown functionality.
 * This class is responsible for managing the countdown feature on the home page.
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/countdown")
@RequiredArgsConstructor
public class CountdownController {
    private final CountdownService countdownService;

    /**
     * Retrieves the countdown information.
     *
     * @param id The ID of the countdown.
     * @return ResponseEntity containing the response with the CountdownDto object.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<CountdownDto>> getCountdown(Long id) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "Countdown returned successfully!", countdownService.getCountdown(id)));
    }
}
