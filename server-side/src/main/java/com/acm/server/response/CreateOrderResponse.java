package com.acm.server.response;

import lombok.Data;

@Data
public class CreateOrderResponse {
    private MessageDto message;
    private DataDto data;
}
