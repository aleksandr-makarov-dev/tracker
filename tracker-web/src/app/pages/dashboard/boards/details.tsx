import { AvatarGroup } from "@/components/closed/avatar-group";
import { MultiSelect } from "@/components/closed/multi-select";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBoardById } from "@/features/boards/api/get-board-by-id";
import { useTasksByBoardId } from "@/features/boards/api/get-tasks-by-board-id";
import { ListCreateDialog } from "@/features/boards/components/list-create-dialog";
import { TaskCreateDialog } from "@/features/boards/components/task-create-dialog";
import type { TaskPriority } from "@/features/boards/types/task";
import { formatDate } from "@/utils/format-date";
import type { VariantProps } from "class-variance-authority";
import {
  ComputerIcon,
  SearchIcon,
  PlusIcon,
  MoreVerticalIcon,
} from "lucide-react";
import { useParams } from "react-router";

const mockLabels: {
  name: string;
  color: VariantProps<typeof badgeVariants>["color"];
}[] = [
  { name: "DevOps", color: "blue" },
  { name: "Фронтенд", color: "green" },
];

export function DashboardBoardDetailsPage() {
  const { boardId } = useParams<{ boardId: string }>();

  const boardQuery = useBoardById({
    boardId: boardId!,
  });

  const tasksQuery = useTasksByBoardId({
    boardId: boardId!,
  });

  return (
    <DashboardLayout>
      <div className="overflow-hidden h-full flex flex-col gap-4 p-1">
        <div>
          <h2 className="text-2xl font-semibold flex flex-row items-center gap-2">
            <div className="bg-blue-100 rounded p-1.5">
              <ComputerIcon />
            </div>
            {boardQuery.data?.data?.title}
          </h2>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Input className="w-min" placeholder="Поиск по задачам" />
          <MultiSelect
            placeholder="Метки задачи"
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
            placeholder="Приоритет задачи"
            className="w-48"
            options={[
              { label: "Низкий", value: "frontend" },
              { label: "Средний", value: "backend" },
              { label: "Высокий", value: "testing" },
              { label: "Критический", value: "mobile" },
            ]}
            label="Выберите приоритет"
          />
          <Button>
            <SearchIcon />
            Поиск
          </Button>
          <Button variant="soft" color="blue">
            Расширенный фильтр
          </Button>
          <div className="flex-1" />
          <ListCreateDialog
            triggerButton={
              <Button>
                <PlusIcon />
                Добавить список
              </Button>
            }
            boardId={boardId!}
          />
        </div>
        <div className="flex flex-row gap-2 flex-1 overflow-x-auto overflow-y-hidden h-full">
          {boardQuery.data?.data?.lists.map((list) => (
            <div
              key={list.id}
              className="w-80 shrink-0 bg-accent rounded flex flex-col h-full"
            >
              <div className="p-2 flex flex-row items-center">
                <p className="text-sm font-medium flex-1 flex flex-row gap-2">
                  <span>{list.title}</span>
                  <span className="text-muted-foreground">25</span>
                </p>
                <div className="flex flex-row gap-1">
                  <TaskCreateDialog
                    triggerButton={
                      <Button variant="soft" color="gray" size="icon">
                        <PlusIcon />
                      </Button>
                    }
                    boardId={boardId!}
                    listId={list.id}
                  />
                  <Button variant="soft" color="gray" size="icon">
                    <MoreVerticalIcon />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 p-2 pt-0 overflow-y-auto">
                {tasksQuery.data?.data
                  ?.filter((item) => item.listId === list.id)
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
                        {item.dueDate && (
                          <Badge variant="soft" color="gray">
                            {formatDate(item.dueDate)}
                          </Badge>
                        )}
                      </div>
                      <div>
                        <p className="text-sm break-words">{item.title}</p>
                      </div>
                      <div className="flex flex-row gap-1 flex-wrap">
                        {mockLabels.map((label) => (
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
                          10 Файлов
                        </Badge>
                        <Badge variant="soft" color="gray">
                          5 Подзадач
                        </Badge>
                        <Badge variant="soft" color="gray">
                          7 Сообщений
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
