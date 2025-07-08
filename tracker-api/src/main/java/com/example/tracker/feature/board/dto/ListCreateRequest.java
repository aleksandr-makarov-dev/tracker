package com.example.tracker.feature.board.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ListCreateRequest(
        @NotBlank(message = "Title is required.")
        @Size(min = 3, max = 50, message = "Title must be between {min} and {max} characters.")
        String title,

        @NotNull(message = "Board ID is required.")
        Long boardId
) {
}
