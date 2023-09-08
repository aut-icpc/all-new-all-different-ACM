package com.acm.server.request;

import lombok.Data;

@Data
public class SignInRequest {
    private String password;
    private String username;
}
