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

@RestController
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<BaseResponseDto<JwtAuthenticationResponse>> login(@RequestBody SignInRequest request) {
        return ResponseEntity.ok(
                new BaseResponseDto<>("logged in!", authenticationService.signIn(request))
        );
    }
}
