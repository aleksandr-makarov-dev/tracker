create table if not exists tasks
(
    id          bigint                      not null generated always as identity,
    title       varchar(100)                not null,
    description varchar(1000),
    created_at  timestamp without time zone not null,
    priority    varchar(32)                 not null,
    due_date    timestamp without time zone,
    list_id     bigint                      not null,
    primary key (id),
    constraint fk_list_task foreign key (list_id) references lists (id)
)