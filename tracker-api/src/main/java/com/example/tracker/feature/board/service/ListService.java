package com.example.tracker.feature.board.service;

import com.example.tracker.feature.board.dto.ListCreateRequest;
import com.example.tracker.feature.board.dto.ListSummaryResponse;
import com.example.tracker.feature.board.model.ListEntity;

public interface ListService {

    ListSummaryResponse createList(ListCreateRequest request);

    ListEntity getListByIdOrThrow(Long id);
}
