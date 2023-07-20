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
        return ResponseEntity.ok(new BaseResponseDto<>(
                "About Us returned successfully!", aboutUsService.getAboutUs()));
    }

    /**
     * Saves the About Us information.
     *
     * @param dto The AboutUsDto object containing the About Us details to be saved.
     * @return ResponseEntity containing the response with the saved AboutUsDto object.
     */
    @PostMapping
    public ResponseEntity<BaseResponseDto<AboutUsDto>> saveAboutUs(@RequestBody AboutUsDto dto) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "About Us saved successfully!", aboutUsService.saveAboutUs(dto)
        ));
    }
}
