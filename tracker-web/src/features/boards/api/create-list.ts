import type { ApiResponse } from "@/types";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { ListCreateRequest, ListSummaryResponse } from "../types/list";

export function createList({
  data,
}: {
  data: ListCreateRequest;
}): Promise<ApiResponse<ListSummaryResponse>> {
  return api.post("/lists", data);
}

type UseCreateListOptions = {
  mutationConfig?: MutationConfig<typeof createList>;
};

export const useCreateList = ({
  mutationConfig,
}: UseCreateListOptions = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createList,
  });
};
