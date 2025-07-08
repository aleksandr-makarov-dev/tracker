import type { ApiResponse } from "@/types";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { BoardCreateRequest, BoardSummaryResponse } from "../types/board";

export function createBoard({
  data,
}: {
  data: BoardCreateRequest;
}): Promise<ApiResponse<BoardSummaryResponse>> {
  return api.post("/boards", data);
}

type UseCreateBoardOptions = {
  mutationConfig?: MutationConfig<typeof createBoard>;
};

export const useCreateBoard = ({
  mutationConfig,
}: UseCreateBoardOptions = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createBoard,
  });
};
