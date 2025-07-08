package com.example.tracker.feature.board.mapper;

import com.example.tracker.feature.board.dto.ListCreateRequest;
import com.example.tracker.feature.board.dto.ListSummaryResponse;
import com.example.tracker.feature.board.model.ListEntity;
import org.springframework.stereotype.Component;

@Component
public class ListMapper {

    public ListEntity toListEntity(ListCreateRequest request) {
        return ListEntity.builder()
                .title(request.title())
                .build();
    }

    public ListSummaryResponse toListSummaryResponse(ListEntity list) {
        return new ListSummaryResponse(list.getId(), list.getTitle());
    }
}
