import { AvatarGroup } from "@/components/closed/avatar-group";
import { MultiSelect } from "@/components/closed/multi-select";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/utils/format-date";
import type { VariantProps } from "class-variance-authority";
import {
  ComputerIcon,
  FilterIcon,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";

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
      { name: "DevOps", color: "blue" },
      { name: "Фронтенд", color: "green" },
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
    labels: [{ name: "Аналитика", color: "gray" }],
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
    labels: [{ name: "Архитектура", color: "orange" }],
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
      { name: "Фронтенд", color: "blue" },
      { name: "Бэкенд", color: "red" },
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
      { name: "Бэкенд", color: "red" },
      { name: "Безопасность", color: "orange" },
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
      { name: "Бэкенд", color: "red" },
      { name: "API", color: "blue" },
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
      { name: "Фронтенд", color: "blue" },
      { name: "UI", color: "blue" },
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
    labels: [{ name: "Фронтенд", color: "blue" }],
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
      { name: "Фронтенд", color: "blue" },
      { name: "UX", color: "green" },
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
      { name: "Фронтенд", color: "blue" },
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
    labels: [{ name: "Контент", color: "green" }],
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
    labels: [{ name: "Дизайн", color: "blue" }],
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
      { name: "UI", color: "orange" },
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
      { name: "Бэкенд", color: "red" },
      { name: "Архитектура", color: "gray" },
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
      { name: "Ревью", color: "blue" },
      { name: "Бэкенд", color: "red" },
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
      { name: "GraphQL", color: "orange" },
      { name: "Бэкенд", color: "red" },
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
      { name: "Фронтенд", color: "blue" },
      { name: "UI", color: "red" },
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
    labels: [{ name: "Тесты", color: "yellow" }],
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
      { name: "Фронтенд", color: "blue" },
      { name: "UX", color: "gray" },
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
    labels: [{ name: "DevOps", color: "red" }],
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
      { name: "Тесты", color: "yellow" },
      { name: "Фронтенд", color: "blue" },
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
      { name: "Фронтенд", color: "blue" },
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
      { name: "Тесты", color: "yellow" },
      { name: "Бэкенд", color: "red" },
    ],
    files: 2,
    messages: 3,
    checkItems: 2,
  },
];

export function KanbanPage() {
  return (
    <DashboardLayout>
      <div className="overflow-hidden h-full flex flex-col gap-4 p-1">
        <div>
          <h2 className="text-2xl font-semibold flex flex-row items-center gap-2">
            <div className="bg-blue-100 rounded p-1.5">
              <ComputerIcon />
            </div>
            YH Фронтенд
          </h2>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row gap-2 items-center">
            <Input className="w-min" placeholder="Поиск по задачам" />
            <Button>Поиск</Button>
          </div>
          <MultiSelect
            placeholder="Выбрать метки"
            className="w-48"
            options={[
              { label: "Фонтенд", value: "frontend" },
              { label: "Бэкенд", value: "backend" },
              { label: "Тестирование", value: "testing" },
              { label: "Мобайл", value: "mobile" },
              {
                label: "Встроенное программирование",
                value: "embedded",
              },
            ]}
            label="Выберите метки"
          />
          <MultiSelect
            placeholder="Выбрать приориоритет"
            className="w-48"
            options={[
              { label: "Низкий", value: "frontend" },
              { label: "Средний", value: "backend" },
              { label: "Высокий", value: "testing" },
              { label: "Критический", value: "mobile" },
            ]}
            label="Выберите приоритет"
          />
          <Button variant="soft" color="blue">
            <FilterIcon /> Расширенный фильт
          </Button>
        </div>
        <div className="flex flex-row gap-2 flex-1 overflow-x-auto overflow-y-hidden h-full">
          {columns.map((column) => (
            <div
              key={column.id}
              className="w-80 shrink-0 bg-accent rounded flex flex-col h-full"
            >
              <div className="p-2 flex flex-row items-center">
                <p className="text-sm font-medium flex-1 flex flex-row gap-2">
                  <span>{column.label}</span>
                  <span className="text-muted-foreground">25</span>
                </p>
                <div className="flex flex-row gap-1">
                  <Button variant="soft" color="gray" size="icon">
                    <PlusIcon />
                  </Button>
                  <Button variant="soft" color="gray" size="icon">
                    <MoreVerticalIcon />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 p-2 pt-0 overflow-y-auto">
                {items
                  .filter((item) => item.listId === column.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-background border flex flex-col gap-2 p-2 rounded shrink-0"
                    >
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
                          <Badge variant="soft" color="gray">
                            {formatDate(item.dueDate)}
                          </Badge>
                        ) : (
                          <Badge variant="soft" color="red">
                            Сегодня
                          </Badge>
                        )}
                      </div>
                      <div>
                        <p className="text-sm break-words">{item.title}</p>
                      </div>
                      <div className="flex flex-row gap-1 flex-wrap">
                        {item.labels.map((label) => (
                          <Badge
                            key={label.name}
                            variant="soft"
                            color={label.color ?? "gray"}
                          >
                            {label.name}
                          </Badge>
                        ))}
                        <Badge
                          variant="soft"
                          color={taskPriorityMap[item.priority].color ?? "gray"}
                        >
                          {taskPriorityMap[item.priority].label}
                        </Badge>
                        <Badge variant="soft" color="gray">
                          {item.files} Файлов
                        </Badge>
                        <Badge variant="soft" color="gray">
                          {item.checkItems} Подзадач
                        </Badge>
                        <Badge variant="soft" color="gray">
                          {item.messages} Сообщений
                        </Badge>
                        {Math.random() > 0.5 ? (
                          <Badge variant="soft" color="gray">
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
      </div>
    </DashboardLayout>
  );
}

const taskPriorityMap: Record<
  TaskPriority,
  { label: string; color: VariantProps<typeof badgeVariants>["color"] }
> = {
  LOW: { label: "Низкий", color: "blue" },
  MEDIUM: { label: "Средний", color: "yellow" },
  HIGH: { label: "Высокий", color: "orange" },
  CRITICAL: { label: "Критический", color: "red" },
} as const;
