package com.acm.server.controller;

import com.acm.server.config.Constants;
import com.acm.server.model.dto.BaseResponseDto;
import com.acm.server.model.dto.TimelineDto;
import com.acm.server.service.TimelineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for handling requests related to the timeline functionality.
 * This class is responsible for managing timeline-related operations.
 * The base URL for this controller is "{@value Constants#BASE_CONTEST_API_URL}/timeline".
 * Requires a TimelineService instance for processing timeline-related requests.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping(Constants.BASE_CONTEST_API_URL + "/timeline")
public class TimelineController {
    private final TimelineService timelineService;

    /**
     * Retrieves a list of timelines.
     *
     * @return ResponseEntity containing the response with the list of TimelineDto objects.
     */
    @GetMapping
    public ResponseEntity<BaseResponseDto<List<TimelineDto>>> getTimelines() {
        // Retrieve the list of timelines from the service layer
        List<TimelineDto> timelines = timelineService.getTimelines();

        // Return the response entity with the list of timelines wrapped in BaseResponseDto
        return ResponseEntity.ok(
                new BaseResponseDto<>("Timelines have been returned successfully!", timelines));
    }

    /**
     * Saves a new timeline.
     *
     * @param dto The TimelineDto object containing the details of the timeline to be saved.
     * @return ResponseEntity containing the response with the saved TimelineDto object.
     */
    @PostMapping
    @Secured("ROLE_ADMIN")
    public ResponseEntity<BaseResponseDto<TimelineDto>> saveTimeline(@RequestBody TimelineDto dto) {
        // Save the timeline using the provided TimelineDto and get the saved timeline details
        TimelineDto savedTimelineDto = timelineService.saveTimeline(dto);

        // Return the response entity with the saved timeline data wrapped in BaseResponseDto
        return ResponseEntity.ok(
                new BaseResponseDto<>(
                        "Timeline has been saved successfully!", savedTimelineDto));
    }
}
