package com.acm.server.request;

import lombok.Data;

@Data
public class SignUpRequest {
    private String password;
    private String username;
}
