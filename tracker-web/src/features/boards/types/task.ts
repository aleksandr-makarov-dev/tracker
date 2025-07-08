import { z } from "zod";

export type TaskSummaryResponse = {
  id: string;
  title: string;
  priority: TaskPriority;
  dueDate?: Date | undefined | null;
  listId: string;
};

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export const TaskCreateRequestSchema = z.object({
  title: z.string().min(3).max(100),
  priority: z.string().min(1).max(32),
  dueDate: z.string().optional(),
  listId: z.string(),
});

export type TaskCreateRequest = z.infer<typeof TaskCreateRequestSchema>;
