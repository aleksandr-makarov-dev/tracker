create table if not exists lists
(
    id         bigint                   not null generated always as identity,
    title      varchar(50)              not null,
    created_at timestamp with time zone not null,
    board_id bigint                   not null,
    primary key (id),
    constraint fk_board_list foreign key (board_id) references boards (id)
)