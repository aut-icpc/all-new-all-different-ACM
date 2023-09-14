package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.MailDto;
import com.acm.server.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Controller class for handling mail-related requests.
 * This class handles the requests related to sending and saving mail messages.
 * It maps the endpoint to the appropriate request handling method.
 *
 * @author Farid Masjedi
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/mail")
public class MailController {
    private final MailService mailService;

    /**
     * Handles the POST request for sending and saving a mail message.
     * This method receives a POST request to the "/mail" endpoint and saves the mail message using the MailService.
     * It returns the saved mail message in the response body.
     *
     * @param mailDto The MailDto object containing the mail message details.
     * @return ResponseEntity containing the BaseResponseDto with the saved mail message.
     */
    @PostMapping
    public ResponseEntity<BaseResponseDto<MailDto>> postMail(@RequestBody @Valid MailDto mailDto) {
        return ResponseEntity.ok(new BaseResponseDto<>(
                "Mail has been saved successfully!", mailService.saveMail(mailDto)
        ));
    }
}