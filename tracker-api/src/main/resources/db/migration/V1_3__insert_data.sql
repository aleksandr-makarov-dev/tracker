-- Добавляем одну доску
INSERT INTO boards (title, status, created_at)
VALUES ('Доска управления проектом', 'ACTIVE', NOW());

-- Предполагаем, что доска получила ID = 1
-- Добавляем 5 списков, связанных с этой доской
INSERT INTO lists (title, created_at, board_id)
VALUES ('Бэклог', NOW(), 1),
       ('К выполнению', NOW(), 1),
       ('В процессе', NOW(), 1),
       ('На проверке', NOW(), 1),
       ('Готово', NOW(), 1);

-- Предположим, что списки получили ID от 1 до 5

-- Задачи для списка 1 (Бэклог)
INSERT INTO tasks (title, description, created_at, priority, due_date, list_id)
VALUES
    ('Разработка экрана входа', 'Создать макет интерфейса', NOW(), 'MEDIUM', NOW() + INTERVAL '7 days', 1),
    ('Изучить OAuth', 'Сравнить Google и GitHub OAuth', NOW(), 'LOW', NOW() + INTERVAL '10 days', 1),
-- дополнительные 4 задачи для списка 1
    ('Изучить требования', 'Собрать требования от заказчика', NOW(), 'LOW', NOW() + INTERVAL '12 days', 1),
    ('Оценка трудозатрат', 'Оценить задачи на первую итерацию', NOW(), 'MEDIUM', NOW() + INTERVAL '9 days', 1),
    ('Анализ конкурентов', 'Исследование похожих решений', NOW(), 'LOW', NOW() + INTERVAL '14 days', 1),
    ('Создание roadmap', 'Определить ключевые этапы', NOW(), 'MEDIUM', NOW() + INTERVAL '11 days', 1);

-- Задачи для списка 2 (К выполнению)
INSERT INTO tasks (title, description, created_at, priority, due_date, list_id)
VALUES ('Создание схемы БД', 'Проектирование сущностей', NOW(), 'HIGH', NOW() + INTERVAL '5 days', 2),
       ('Интеграция Flyway', 'Автоматический запуск миграций', NOW(), 'MEDIUM', NOW() + INTERVAL '6 days', 2),
       ('Реализация авторизации', 'JWT или session-based?', NOW(), 'HIGH', NOW() + INTERVAL '8 days', 2);

-- Задачи для списка 3 (В процессе)
INSERT INTO tasks (title, description, created_at, priority, due_date, list_id)
VALUES ('Создание REST API', 'Начать с досок и списков', NOW(), 'HIGH', NOW() + INTERVAL '4 days', 3),
       ('Юнит-тесты для сервисов', 'Покрытие 80%', NOW(), 'MEDIUM', NOW() + INTERVAL '6 days', 3),
       ('Документация Swagger', 'OpenAPI описание эндпоинтов', NOW(), 'LOW', NOW() + INTERVAL '10 days', 3),
       ('Интеграция фронтенда', 'Начальная настройка React или Vue', NOW(), 'HIGH', NOW() + INTERVAL '9 days', 3);

-- Задачи для списка 4 (На проверке)
INSERT INTO tasks (title, description, created_at, priority, due_date, list_id)
VALUES ('Код-ревью: сервис досок', 'Проверить именование и стиль', NOW(), 'MEDIUM', NOW() + INTERVAL '2 days', 4),
       ('Проверка безопасности', 'Найти уязвимости в API', NOW(), 'HIGH', NOW() + INTERVAL '3 days', 4);

-- Задачи для списка 5 (Готово)
INSERT INTO tasks (title, description, created_at, priority, due_date, list_id)
VALUES ('Инициализация проекта', 'Настроены Gradle, Git, CI/CD', NOW(), 'HIGH', NULL, 5),
       ('Первый коммит', 'Загрузка базовой структуры', NOW(), 'LOW', NULL, 5),
       ('Создание README', 'Общее описание проекта', NOW(), 'LOW', NULL, 5);
