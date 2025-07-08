package com.example.tracker.feature.board.service;

import com.example.tracker.feature.board.dto.TaskCreateRequest;
import com.example.tracker.feature.board.dto.TaskSummaryResponse;

import java.util.List;

public interface TaskService {

    TaskSummaryResponse createTask(TaskCreateRequest request);

    List<TaskSummaryResponse> getTasksByBoardId(Long boardId);

}
