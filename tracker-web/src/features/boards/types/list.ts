import { z } from "zod";

export type ListSummaryResponse = {
  id: string;
  title: string;
};

export const ListCreateRequestSchema = z.object({
  title: z.string().min(3).max(50),
  boardId: z.string(),
});

export type ListCreateRequest = z.infer<typeof ListCreateRequestSchema>;
