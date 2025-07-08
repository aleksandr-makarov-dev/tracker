package com.example.tracker.feature.board.repository;

import com.example.tracker.feature.board.model.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    @Query("select t from TaskEntity t join t.list l join l.board b where b.id =:boardId")
    List<TaskEntity> getTasksByBoardId(@Param("boardId") Long boardId);
}
