import type { ApiResponse } from "@/types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import type { QueryConfig } from "@/lib/react-query";
import type { BoardSummaryResponse } from "../types/board";
import { api } from "@/lib/api-client";

export function getBoards(): Promise<ApiResponse<BoardSummaryResponse[]>> {
  return api.get("/boards");
}

export const getBoardsQueryOptions = () => {
  return queryOptions({
    queryKey: ["boards"],
    queryFn: () => getBoards(),
  });
};

type UseBoardsOptions = {
  queryConfig?: QueryConfig<typeof getBoardsQueryOptions>;
};

export const useBoards = ({ queryConfig }: UseBoardsOptions = {}) => {
  return useQuery({
    ...getBoardsQueryOptions(),
    ...queryConfig,
  });
};
