package com.example.tracker.feature.board.dto;

import com.example.tracker.feature.board.model.TaskPriority;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public record TaskCreateRequest(
        @NotBlank(message = "Title is required.")
        @Size(min = 3, max = 100, message = "Title must be between {min} and {max} characters.")
        String title,

        @NotNull(message = "Priority is required.")
        TaskPriority priority,

        @Future(message = "Due date must be in future.")
        LocalDateTime dueDate,

        @NotNull(message = "List id is required.")
        Long listId
) {
}
