package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.domain.CountdownType;
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
 * The base URL for this controller is "{@value Constants#BASE_API_URL}/countdown".
 * Requires a CountdownService instance for processing countdown-related requests.
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/countdown")
@RequiredArgsConstructor
public class CountdownController {
    private final CountdownService countdownService;

    /**
     * Retrieves the countdown information based on the provided countdown ID.
     *
     * @param id The ID of the countdown to retrieve.
     * @return ResponseEntity containing the response with the CountdownDto object.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<CountdownDto>> getCountdown(CountdownType type) {
        // Retrieve the countdown from the service layer based on the provided ID
        CountdownDto countdownDto = countdownService.getCountdown(type);

        // Return the response entity with the countdown data wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("Countdown returned successfully!", countdownDto));
    }
}
