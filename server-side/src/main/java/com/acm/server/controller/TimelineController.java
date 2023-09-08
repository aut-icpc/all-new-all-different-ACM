package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.TimelineDto;
import com.acm.server.service.TimelineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/timeline")
public class TimelineController {
    private final TimelineService timelineService;

    @GetMapping
    public ResponseEntity<BaseResponseDto<List<TimelineDto>>> getTimelines() {
        return ResponseEntity.ok(
                new BaseResponseDto<>("Timelines has been returned successfully!",
                        timelineService.getTimelines()));
    }

    @PostMapping
    public ResponseEntity<BaseResponseDto<TimelineDto>> saveTimeline(@RequestBody TimelineDto dto) {
        // Save the AboutUsDto object using the provided dto
        TimelineDto timelineDto = timelineService.saveTimeline(dto);

        // Return the response entity with the saved AboutUsDto object wrapped in BaseResponseDto
        return ResponseEntity.ok(
                new BaseResponseDto<>(
                "Timeline has been saved successfully!", timelineDto));
    }
}
