package com.example.tracker.feature.board.mapper;

import com.example.tracker.feature.board.dto.TaskCreateRequest;
import com.example.tracker.feature.board.dto.TaskSummaryResponse;
import com.example.tracker.feature.board.model.TaskEntity;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    public TaskSummaryResponse toTaskSummaryResponse(TaskEntity task) {
        return new TaskSummaryResponse(
                task.getId(),
                task.getTitle(),
                task.getPriority(),
                task.getDueDate(),
                task.getList().getId()
        );
    }

    public TaskEntity toTaskEntity(TaskCreateRequest request) {
        return TaskEntity.builder()
                .title(request.title())
                .priority(request.priority())
                .dueDate(request.dueDate())
                .build();
    }
}
