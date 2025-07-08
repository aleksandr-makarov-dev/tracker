package com.example.tracker.feature.board.mapper;

import com.example.tracker.feature.board.dto.BoardCreateRequest;
import com.example.tracker.feature.board.dto.BoardDetailsResponse;
import com.example.tracker.feature.board.dto.BoardSummaryResponse;
import com.example.tracker.feature.board.model.BoardEntity;
import com.example.tracker.feature.board.model.BoardStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BoardMapper {

    private final ListMapper listMapper;

    public BoardEntity toBoardEntity(BoardCreateRequest request) {
        return BoardEntity.builder()
                .title(request.title())
                .status(BoardStatus.DRAFT)
                .build();
    }

    public BoardSummaryResponse toProjectSummaryResponse(BoardEntity board) {
        return new BoardSummaryResponse(
                board.getId(),
                board.getTitle(),
                board.getStatus()
        );
    }

    public BoardDetailsResponse toBoardDetailsResponse(BoardEntity board) {
        return new BoardDetailsResponse(
                board.getId(),
                board.getTitle(),
                board.getStatus(),
                board.getLists()
                        .stream()
                        .map(listMapper::toListSummaryResponse)
                        .toList()
        );
    }
}
