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

/**
 * Controller class for handling registration terms related operations.
 *
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/terms")
@RequiredArgsConstructor
public class RegistrationTermsController {
    private final RegistrationTermsService service;

    /**
     * Retrieves the registration terms.
     *
     * @return ResponseEntity containing the response with registration terms.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<RegistrationTermsDto>> getTerms() {
        return ResponseEntity.ok(
                new BaseResponseDto<>("Terms have been returned successfully!",
                        service.getTerms())
        );
    }
}