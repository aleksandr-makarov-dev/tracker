package com.example.tracker.feature.board.model;

import com.example.tracker.model.AuditEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "lists")
public class ListEntity extends AuditEntity {

    @Column(name = "title", nullable = false)
    private String title;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "board_id", nullable = false, referencedColumnName = "id")
    private BoardEntity board;

    @OneToMany(mappedBy = "list", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Builder.Default
    private List<TaskEntity> tasks = new ArrayList<>();

    public void addTask(TaskEntity task) {
        tasks.add(task);
        task.setList(this);
    }
}
