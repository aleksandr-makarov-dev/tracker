import type { ApiResponse } from "@/types";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { TaskCreateRequest, TaskSummaryResponse } from "../types/task";

export function createTask({
  data,
}: {
  data: TaskCreateRequest;
}): Promise<ApiResponse<TaskSummaryResponse>> {
  return api.post("/tasks", data);
}

type UseCreateTaskOptions = {
  mutationConfig?: MutationConfig<typeof createTask>;
};

export const useCreateTask = ({
  mutationConfig,
}: UseCreateTaskOptions = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createTask,
  });
};
