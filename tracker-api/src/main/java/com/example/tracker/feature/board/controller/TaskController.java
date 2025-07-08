package com.example.tracker.feature.board.controller;

import com.example.tracker.dto.ApiResponse;
import com.example.tracker.feature.board.dto.TaskCreateRequest;
import com.example.tracker.feature.board.dto.TaskSummaryResponse;
import com.example.tracker.feature.board.service.TaskService;
import com.example.tracker.util.ResponseUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<ApiResponse<TaskSummaryResponse>> createTask(@RequestBody @Valid TaskCreateRequest request) {
        return ResponseUtils.created(taskService.createTask(request));
    }

}
