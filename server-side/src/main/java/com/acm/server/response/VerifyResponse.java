package com.acm.server.response;

import lombok.Data;

@Data
public class VerifyResponse {
    private MessageDto message;
    private VerifyDataDto data;
}
