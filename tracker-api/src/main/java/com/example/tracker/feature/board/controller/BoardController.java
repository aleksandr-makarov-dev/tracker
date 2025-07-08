package com.example.tracker.feature.board.controller;

import com.example.tracker.dto.ApiResponse;
import com.example.tracker.feature.board.dto.BoardCreateRequest;
import com.example.tracker.feature.board.dto.BoardDetailsResponse;
import com.example.tracker.feature.board.dto.BoardSummaryResponse;
import com.example.tracker.feature.board.dto.TaskSummaryResponse;
import com.example.tracker.feature.board.service.BoardService;
import com.example.tracker.feature.board.service.TaskService;
import com.example.tracker.util.ResponseUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<ApiResponse<BoardSummaryResponse>> createProject(@RequestBody BoardCreateRequest request) {
        return ResponseUtils.created(boardService.createProject(request));
    }

    @GetMapping()
    public ResponseEntity<ApiResponse<List<BoardSummaryResponse>>> getAllProjects() {
        return ResponseUtils.ok(boardService.getAllProjects());
    }

    @GetMapping("{id}")
    public ResponseEntity<ApiResponse<BoardDetailsResponse>> getBoardById(@PathVariable Long id) {
        return ResponseUtils.ok(boardService.getBoardById(id));
    }

    @GetMapping("{id}/tasks")
    public ResponseEntity<ApiResponse<List<TaskSummaryResponse>>> getTasksByBoardId(@PathVariable Long id) {
        return ResponseUtils.ok(taskService.getTasksByBoardId(id));
    }
}
