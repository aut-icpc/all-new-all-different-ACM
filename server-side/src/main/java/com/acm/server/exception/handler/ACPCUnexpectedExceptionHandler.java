package com.acm.server.exception.handler;

import com.acm.server.model.dto.BaseResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * ACPC unexpected exception handler
 *
 * @author Farid Masjedi
 */
@Slf4j
@ControllerAdvice
@Order
public class ACPCUnexpectedExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseResponseDto<Object>> handleUnexpectedException(Exception e) {
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(BaseResponseDto.builder().message(e.getMessage()).build(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
