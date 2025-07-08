package com.example.tracker.feature.board.repository;

import com.example.tracker.feature.board.model.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository extends JpaRepository<ListEntity, Long> {
}
