package com.example.tracker.feature.board.service;

import com.example.tracker.feature.board.dto.ListCreateRequest;
import com.example.tracker.feature.board.dto.ListSummaryResponse;
import com.example.tracker.feature.board.mapper.ListMapper;
import com.example.tracker.feature.board.model.BoardEntity;
import com.example.tracker.feature.board.model.ListEntity;
import com.example.tracker.feature.board.repository.ListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class JpaListService implements ListService {

    private final ListRepository listRepository;
    private final ListMapper listMapper;
    private final BoardService boardService;

    @Transactional
    @Override
    public ListSummaryResponse createList(ListCreateRequest request) {
        BoardEntity board = boardService.getBoardByIdOrThrow(request.boardId());

        ListEntity list = listMapper.toListEntity(request);
        board.addList(list);

        return listMapper.toListSummaryResponse(listRepository.save(list));
    }

    @Override
    public ListEntity getListByIdOrThrow(Long id) {
        return listRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("List not found."));
    }
}
