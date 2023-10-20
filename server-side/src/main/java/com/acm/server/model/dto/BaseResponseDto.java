package com.acm.server.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * Base Response DTO
 * message: A message to be sent to the client
 * result: The result of the request
 * @param <T> The type of the result
 *
 * @author Farid Masjedi
 *
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class BaseResponseDto<T> implements Serializable {
    private String message;
    private T result;
}
