package com.acm.server.model.dto;

import lombok.Data;

@Data
public class PictureDto {
    private Long id;

    private byte[] data;
}
