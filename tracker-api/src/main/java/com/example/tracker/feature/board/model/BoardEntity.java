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
@Table(name = "boards")
public class BoardEntity extends AuditEntity {

    @Column(name = "title", nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private BoardStatus status;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Builder.Default
    private List<ListEntity> lists = new ArrayList<>();

    public void addList(ListEntity list) {
        lists.add(list);
        list.setBoard(this);
    }
}
