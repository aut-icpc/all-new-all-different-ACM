package com.acm.server.service;

import com.acm.server.request.SignInRequest;
import com.acm.server.request.SignUpRequest;
import com.acm.server.response.JwtAuthenticationResponse;

public interface AuthenticationService {

    JwtAuthenticationResponse signIn(SignInRequest request);
    JwtAuthenticationResponse signUp(SignUpRequest request);
}
