package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.request.SignInRequest;
import com.acm.server.response.JwtAuthenticationResponse;
import com.acm.server.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class for authentication-related endpoints.
 * This class handles the authentication requests such as login.
 * It maps the endpoints to appropriate request handling methods.
 *
 * @author Farid Masjedi
 */
@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    /**
     * Handles the login request.
     * This method receives a POST request to the "/login" endpoint and authenticates the user.
     * It delegates the authentication process to the AuthenticationService and returns the JWT authentication response
     * in the response body.
     *
     * @param request The SignInRequest object containing the user's credentials.
     * @return ResponseEntity containing the BaseResponseDto with the JWT authentication response.
     */
    @PostMapping("/login")
    public ResponseEntity<BaseResponseDto<JwtAuthenticationResponse>> login(@RequestBody SignInRequest request) {
        return ResponseEntity.ok(
                new BaseResponseDto<>("logged in!", authenticationService.signIn(request))
        );
    }
}