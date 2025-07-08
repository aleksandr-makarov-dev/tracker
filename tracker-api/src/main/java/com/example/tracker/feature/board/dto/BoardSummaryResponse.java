package com.example.tracker.feature.board.dto;

import com.example.tracker.feature.board.model.BoardStatus;

public record BoardSummaryResponse(
        Long id,
        String title,
        BoardStatus status
        ) {
}
