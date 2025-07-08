package com.example.tracker.feature.board.service;

import com.example.tracker.feature.board.dto.BoardCreateRequest;
import com.example.tracker.feature.board.dto.BoardDetailsResponse;
import com.example.tracker.feature.board.dto.BoardSummaryResponse;
import com.example.tracker.feature.board.model.BoardEntity;

import java.util.List;

public interface BoardService {

    BoardSummaryResponse createProject(BoardCreateRequest request);

    List<BoardSummaryResponse> getAllProjects();

    BoardDetailsResponse getBoardById(Long id);

    BoardEntity getBoardByIdOrThrow(Long id);
}
