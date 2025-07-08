package com.example.tracker.feature.board.dto;

import com.example.tracker.feature.board.model.TaskPriority;

import java.time.LocalDateTime;

public record TaskSummaryResponse(
        Long id,
        String title,
        TaskPriority priority,
        LocalDateTime dueDate,
        Long listId
) {
}
