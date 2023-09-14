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

/**
 * Controller class for the contact-us endpoint.
 * This class handles the requests related to retrieving contact-us information.
 * It maps the endpoint to the appropriate request handling method.
 *
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/contact-us")
@RequiredArgsConstructor
public class ContactUsController {
    private final ContactUsService contactUsService;

    /**
     * Handles the GET request for retrieving contact-us information.
     * This method receives a GET request to the "/contact-us" endpoint and retrieves the contact-us information
     * from the ContactUsService. It returns the contact-us information in the response body.
     *
     * @return ResponseEntity containing the BaseResponseDto with the contact-us information.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<ContactUsDto>> getContactUs() {
        return ResponseEntity.ok(
                new BaseResponseDto<>("contact us has been returned successfully!",
                        contactUsService.getContactUs())
        );
    }
}