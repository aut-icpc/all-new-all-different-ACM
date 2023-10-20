package com.acm.server.model.dto.zify;

import lombok.Data;

@Data
public class ZifyResponseDto<T> {
    private String message;
    private T data;
}
