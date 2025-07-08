package com.example.tracker.feature.board.repository;

import com.example.tracker.feature.board.model.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Long> {

    @Query("SELECT b FROM BoardEntity b LEFT JOIN FETCH b.lists WHERE b.id = :id")
    Optional<BoardEntity> getBoardWithListsById(@Param("id") Long id);
}
