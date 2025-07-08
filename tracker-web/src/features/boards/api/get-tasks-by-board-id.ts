import { api } from "@/lib/api-client";
import type { ApiResponse } from "@/types";
import { useQuery, queryOptions } from "@tanstack/react-query";
import type { TaskSummaryResponse } from "../types/task";
import type { QueryConfig } from "@/lib/react-query";

export const getTasksByBoardId = ({
  boardId,
}: {
  boardId: string;
}): Promise<ApiResponse<TaskSummaryResponse[]>> => {
  return api.get(`/boards/${boardId}/tasks`);
};

export const getTasksByBoardIdQueryOptions = (boardId: string) => {
  return queryOptions({
    queryKey: ["boards", boardId, "tasks"],
    queryFn: () => getTasksByBoardId({ boardId }),
  });
};

type UseTasksByBoardIdOptions = {
  boardId: string;
  queryConfig?: QueryConfig<typeof getTasksByBoardIdQueryOptions>;
};

export const useTasksByBoardId = ({
  boardId,
  queryConfig,
}: UseTasksByBoardIdOptions) => {
  return useQuery({
    ...getTasksByBoardIdQueryOptions(boardId),
    ...queryConfig,
  });
};
