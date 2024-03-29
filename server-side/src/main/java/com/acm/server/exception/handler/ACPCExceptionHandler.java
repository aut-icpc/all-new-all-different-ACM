package com.acm.server.exception.handler;

import com.acm.server.exception.NotFoundException;
import com.acm.server.model.dto.BaseResponseDto;
import com.fasterxml.jackson.core.JsonParseException;
import jakarta.servlet.ServletException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;
import java.util.Objects;

/**
 * ACPC Exception handler
 *
 * @author Farid Masjedi
 */
@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
@Slf4j
@RequiredArgsConstructor
public class ACPCExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<BaseResponseDto<Object>> handleNotFoundException(NotFoundException e) {
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(BaseResponseDto.builder().message(e.getMessage()).build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({ServletException.class, TypeMismatchException.class, IllegalArgumentException.class, JsonParseException.class})
    public ResponseEntity<BaseResponseDto<Object>> handleBadApiCallException(Exception e) {
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(BaseResponseDto.builder().message(e.getMessage()).build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<BaseResponseDto<Object>> handleValidationException(MethodArgumentNotValidException e) {
        log.error(e.getMessage(), e);
        final StringBuilder builder = new StringBuilder();
        e.getAllErrors().forEach(error -> builder.append(Objects.requireNonNull(error.getDefaultMessage())).append(", "));
        return new ResponseEntity<>(BaseResponseDto.builder().message(builder.toString()).build(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({AccessDeniedException.class})
    public ResponseEntity<BaseResponseDto<Object>> handleSecurityException(Exception e) {
        log.error(e.getMessage(), e);
        return new ResponseEntity<>(BaseResponseDto.builder().message(e.getMessage()).build(), HttpStatus.FORBIDDEN);
    }
}
