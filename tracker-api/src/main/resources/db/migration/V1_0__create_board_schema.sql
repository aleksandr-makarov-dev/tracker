create table if not exists boards
(
    id          bigint                   not null generated always as identity,
    title       varchar(100)             not null,
    status      varchar(32)              not null,
    created_at  timestamp with time zone not null,
    primary key (id)
)