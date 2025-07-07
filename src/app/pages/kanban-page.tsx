import { AvatarGroup } from "@/components/closed/avatar-group";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/format-date";
import type { VariantProps } from "class-variance-authority";
import { MoreVerticalIcon, PlusIcon } from "lucide-react";

type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

const columns: { id: string; label: string }[] = [
  {
    id: "list-1",
    label: "Открыт",
  },
  {
    id: "list-2",
    label: "В работе",
  },
  {
    id: "list-3",
    label: "Требуется информация",
  },
  {
    id: "list-4",
    label: "Ревью",
  },
  {
    id: "list-5",
    label: "Можно тестить",
  },
];

const items: {
  id: string;
  title: string;
  listId: string;
  priority: TaskPriority;
  dueDate?: Date;
  labels: {
    name: string;
    color: VariantProps<typeof badgeVariants>["color"];
  }[];
  files: number;
  messages: number;
  checkItems: number;
}[] = [
  {
    id: "task-1",
    title:
      "Создать проект в репозитории (Прямо очень сложная задача, с очень длинным название)",
    listId: "list-1",
    priority: "CRITICAL",
    dueDate: new Date("2025-08-08"),
    labels: [
      { name: "DevOps", color: "primary" },
      { name: "Фронтенд", color: "success" },
    ],
    files: 4,
    messages: 12,
    checkItems: 5,
  },
  {
    id: "task-2",
    title: "Собрать требования от заказчика",
    listId: "list-1",
    priority: "HIGH",
    dueDate: new Date("2025-08-05"),
    labels: [{ name: "Аналитика", color: "muted" }],
    files: 2,
    messages: 6,
    checkItems: 3,
  },
  {
    id: "task-3",
    title: "Выбрать стек технологий",
    listId: "list-1",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-10"),
    labels: [{ name: "Архитектура", color: "warning" }],
    files: 1,
    messages: 3,
    checkItems: 2,
  },
  {
    id: "task-4",
    title: "Создать базовую структуру проекта",
    listId: "list-1",
    priority: "HIGH",
    dueDate: new Date("2025-08-12"),
    labels: [
      { name: "Фронтенд", color: "primary" },
      { name: "Бэкенд", color: "danger" },
    ],
    files: 5,
    messages: 8,
    checkItems: 4,
  },
  {
    id: "task-8",
    title: "Реализовать аутентификацию",
    listId: "list-2",
    priority: "CRITICAL",
    dueDate: new Date("2025-08-15"),
    labels: [
      { name: "Бэкенд", color: "danger" },
      { name: "Безопасность", color: "warning" },
    ],
    files: 3,
    messages: 10,
    checkItems: 5,
  },
  {
    id: "task-9",
    title: "Интеграция с backend API",
    listId: "list-2",
    priority: "HIGH",
    dueDate: new Date("2025-08-17"),
    labels: [
      { name: "Бэкенд", color: "success" },
      { name: "API", color: "primary" },
    ],
    files: 4,
    messages: 9,
    checkItems: 2,
  },
  {
    id: "task-10",
    title: "Верстка главной страницы",
    listId: "list-2",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-18"),
    labels: [
      { name: "Фронтенд", color: "yellow" },
      { name: "UI", color: "primary" },
    ],
    files: 2,
    messages: 5,
    checkItems: 3,
  },
  {
    id: "task-11",
    title: "Добавить пагинацию",
    listId: "list-2",
    priority: "LOW",
    dueDate: new Date("2025-08-22"),
    labels: [{ name: "Фронтенд", color: "muted" }],
    files: 1,
    messages: 2,
    checkItems: 1,
  },
  {
    id: "task-12",
    title: "Обработка ошибок на клиенте",
    listId: "list-2",
    priority: "HIGH",
    dueDate: new Date("2025-08-20"),
    labels: [
      { name: "Фронтенд", color: "danger" },
      { name: "UX", color: "success" },
    ],
    files: 2,
    messages: 6,
    checkItems: 2,
  },
  {
    id: "task-17",
    title: "Уточнить поведение фильтров",
    listId: "list-3",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-10"),
    labels: [
      { name: "UX", color: "yellow" },
      { name: "Фронтенд", color: "primary" },
    ],
    files: 0,
    messages: 3,
    checkItems: 1,
  },
  {
    id: "task-18",
    title: "Получить текст для страницы 'О нас'",
    listId: "list-3",
    priority: "LOW",
    dueDate: new Date("2025-08-11"),
    labels: [{ name: "Контент", color: "success" }],
    files: 1,
    messages: 1,
    checkItems: 0,
  },
  {
    id: "task-19",
    title: "Согласовать цвета бренда",
    listId: "list-3",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-13"),
    labels: [{ name: "Дизайн", color: "primary" }],
    files: 2,
    messages: 4,
    checkItems: 2,
  },
  {
    id: "task-20",
    title: "Запросить иконки от дизайнера",
    listId: "list-3",
    priority: "LOW",
    dueDate: new Date("2025-08-12"),
    labels: [
      { name: "UI", color: "warning" },
      { name: "Дизайн", color: "yellow" },
    ],
    files: 3,
    messages: 2,
    checkItems: 1,
  },
  {
    id: "task-21",
    title: "Подтвердить структуру базы данных",
    listId: "list-3",
    priority: "HIGH",
    dueDate: new Date("2025-08-16"),
    labels: [
      { name: "Бэкенд", color: "danger" },
      { name: "Архитектура", color: "muted" },
    ],
    files: 2,
    messages: 5,
    checkItems: 3,
  },
  {
    id: "task-22",
    title: "Проверить пулл-реквест: login feature",
    listId: "list-4",
    priority: "HIGH",
    dueDate: new Date("2025-08-09"),
    labels: [
      { name: "Ревью", color: "primary" },
      { name: "Бэкенд", color: "success" },
    ],
    files: 2,
    messages: 7,
    checkItems: 3,
  },
  {
    id: "task-23",
    title: "Ревью интеграции с GraphQL",
    listId: "list-4",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-10"),
    labels: [
      { name: "GraphQL", color: "warning" },
      { name: "Бэкенд", color: "primary" },
    ],
    files: 1,
    messages: 4,
    checkItems: 2,
  },
  {
    id: "task-24",
    title: "Оценка качества кода страницы профиля",
    listId: "list-4",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-11"),
    labels: [
      { name: "Фронтенд", color: "muted" },
      { name: "UI", color: "danger" },
    ],
    files: 2,
    messages: 5,
    checkItems: 3,
  },
  {
    id: "task-25",
    title: "Проверить unit-тесты",
    listId: "list-4",
    priority: "LOW",
    dueDate: new Date("2025-08-13"),
    labels: [{ name: "Тесты", color: "success" }],
    files: 1,
    messages: 2,
    checkItems: 1,
  },
  {
    id: "task-26",
    title: "Ревью кода анимаций",
    listId: "list-4",
    priority: "LOW",
    dueDate: new Date("2025-08-14"),
    labels: [
      { name: "Фронтенд", color: "yellow" },
      { name: "UX", color: "muted" },
    ],
    files: 0,
    messages: 1,
    checkItems: 1,
  },
  {
    id: "task-27",
    title: "Проверка обновления зависимости",
    listId: "list-4",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-15"),
    labels: [{ name: "DevOps", color: "danger" }],
    files: 1,
    messages: 2,
    checkItems: 2,
  },
  {
    id: "task-28",
    title: "Тестирование регистрации",
    listId: "list-5",
    priority: "HIGH",
    dueDate: new Date("2025-08-08"),
    labels: [
      { name: "Тесты", color: "muted" },
      { name: "Фронтенд", color: "primary" },
    ],
    files: 1,
    messages: 2,
    checkItems: 3,
  },
  {
    id: "task-29",
    title: "Проверка адаптивности дизайна",
    listId: "list-5",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-09"),
    labels: [
      { name: "UI", color: "yellow" },
      { name: "Фронтенд", color: "success" },
    ],
    files: 1,
    messages: 2,
    checkItems: 2,
  },
  {
    id: "task-30",
    title: "Тестировать фильтрацию товаров",
    listId: "list-5",
    priority: "MEDIUM",
    dueDate: new Date("2025-08-10"),
    labels: [
      { name: "Тесты", color: "danger" },
      { name: "Бэкенд", color: "primary" },
    ],
    files: 2,
    messages: 3,
    checkItems: 2,
  },
];

export function KanbanPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-row gap-2 flex-1 overflow-x-auto overflow-y-hidden">
        {columns.map((column) => (
          <div key={column.id} className="w-80 shrink-0 bg-accent  rounded">
            <div className="p-2 flex flex-row items-center">
              <p className="text-sm font-medium flex-1 flex flex-row gap-2">
                <span>{column.label}</span>
                <span className="text-muted-foreground">25</span>
              </p>
              <div className="flex flex-row gap-0.5">
                <Button variant="soft" color="muted" size="icon">
                  <PlusIcon />
                </Button>
                <Button variant="soft" color="muted" size="icon">
                  <MoreVerticalIcon />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 flex-1 p-2 pt-0 overflow-y-auto h-full">
              {items
                .filter((items) => items.listId === column.id)
                .map((item) => (
                  <div className="bg-background border flex flex-col gap-2 p-2 rounded shrink-0">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-row gap-2 items-center flex-1">
                        <AvatarGroup
                          avatars={[
                            {
                              image: "https://github.com/leerob.png",
                              alt: "@leerob",
                              fallback: "LR",
                            },
                            {
                              image: "https://github.com/leerob.png",
                              alt: "@leerob",
                              fallback: "LR",
                            },
                            {
                              image: "https://github.com/leerob.png",
                              alt: "@leerob",
                              fallback: "LR",
                            },
                          ]}
                        />
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.id}
                        </p>
                      </div>
                      {Math.random() > 0.5 ? (
                        <Badge variant="soft" color="muted">
                          {formatDate(item.dueDate)}
                        </Badge>
                      ) : (
                        <Badge variant="soft" color="danger">
                          Сегодня
                        </Badge>
                      )}
                    </div>
                    <div>
                      <p className="text-sm">{item.title}</p>
                    </div>
                    <div className="flex flex-row gap-1 flex-wrap">
                      {item.labels.map((label) => (
                        <Badge
                          key={label.name}
                          variant="soft"
                          color={label.color ?? "muted"}
                        >
                          {label.name}
                        </Badge>
                      ))}
                      <Badge
                        variant="soft"
                        color={taskPriorityMap[item.priority].color ?? "muted"}
                      >
                        {taskPriorityMap[item.priority].label}
                      </Badge>
                      <Badge variant="soft" color="muted">
                        {item.files} Файлов
                      </Badge>
                      <Badge variant="soft" color="muted">
                        {item.checkItems} Подзадач
                      </Badge>
                      <Badge variant="soft" color="muted">
                        {item.messages} Сообщений
                      </Badge>
                      {Math.random() > 0.5 ? (
                        <Badge variant="soft" color="muted">
                          Есть описание
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

const taskPriorityMap: Record<
  TaskPriority,
  { label: string; color: VariantProps<typeof badgeVariants>["color"] }
> = {
  LOW: { label: "Низкий", color: "primary" },
  MEDIUM: { label: "Средний", color: "yellow" },
  HIGH: { label: "Высокий", color: "warning" },
  CRITICAL: { label: "Критический", color: "danger" },
} as const;
