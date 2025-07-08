package com.example.tracker.feature.board.dto;

import com.example.tracker.feature.board.model.BoardStatus;

import java.util.List;

public record BoardDetailsResponse(
        Long id,
        String title,
        BoardStatus status,
        List<ListSummaryResponse> lists
) {
}
