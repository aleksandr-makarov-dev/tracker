package com.example.tracker.feature.board.service;

import com.example.tracker.feature.board.dto.TaskCreateRequest;
import com.example.tracker.feature.board.dto.TaskSummaryResponse;
import com.example.tracker.feature.board.mapper.TaskMapper;
import com.example.tracker.feature.board.model.ListEntity;
import com.example.tracker.feature.board.model.TaskEntity;
import com.example.tracker.feature.board.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JpaTaskService implements TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    private final ListService listService;

    @Override
    public TaskSummaryResponse createTask(TaskCreateRequest request) {
        ListEntity list = listService.getListByIdOrThrow(request.listId());

        TaskEntity task = taskMapper.toTaskEntity(request);
        task.setList(list);

        return taskMapper.toTaskSummaryResponse(taskRepository.save(task));
    }

    @Override
    public List<TaskSummaryResponse> getTasksByBoardId(Long boardId) {
        return taskRepository.getTasksByBoardId(boardId)
                .stream()
                .map(taskMapper::toTaskSummaryResponse)
                .collect(Collectors.toList());
    }
}
