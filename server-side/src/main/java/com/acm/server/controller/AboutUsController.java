package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.AboutUsDto;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.service.AboutUsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for handling requests related to the About Us functionality.
 * This class is responsible for managing the About Us feature on the website.
 * The base URL for this controller is "{@value Constants#BASE_API_URL}/about".
 *
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_API_URL + "/about")
@RequiredArgsConstructor
public class AboutUsController {
    private final AboutUsService aboutUsService;

    /**
     * Retrieves the About Us information.
     *
     * @return ResponseEntity containing the response with a list of AboutUsDto objects.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<List<AboutUsDto>>> getAboutUs() {
        // Retrieve all AboutUsDto objects from the service layer
        List<AboutUsDto> aboutUsList = aboutUsService.getAboutUs();

        // Return the response entity with the list of AboutUsDto objects wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("About Us returned successfully!", aboutUsList));
    }

    /**
     * Saves the About Us information.
     *
     * @param dto The AboutUsDto object containing the About Us details to be saved.
     * @return ResponseEntity containing the response with the saved AboutUsDto object.
     */
    @PostMapping
    public ResponseEntity<BaseResponseDto<AboutUsDto>> saveAboutUs(@RequestBody AboutUsDto dto) {
        // Save the AboutUsDto object using the provided dto
        AboutUsDto savedAboutUsDto = aboutUsService.saveAboutUs(dto);

        // Return the response entity with the saved AboutUsDto object wrapped in BaseResponseDto
        return ResponseEntity.ok(new BaseResponseDto<>("About Us saved successfully!", savedAboutUsDto));
    }
}
