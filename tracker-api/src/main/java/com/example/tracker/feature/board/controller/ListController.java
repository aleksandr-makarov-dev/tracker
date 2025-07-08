package com.example.tracker.feature.board.controller;

import com.example.tracker.dto.ApiResponse;
import com.example.tracker.feature.board.dto.ListCreateRequest;
import com.example.tracker.feature.board.dto.ListSummaryResponse;
import com.example.tracker.feature.board.service.ListService;
import com.example.tracker.util.ResponseUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/lists")
@RequiredArgsConstructor
public class ListController {

    private final ListService listService;

    @PostMapping
    public ResponseEntity<ApiResponse<ListSummaryResponse>> createList(@RequestBody @Valid ListCreateRequest request) {
        return ResponseUtils.created(listService.createList(request));
    }
}
