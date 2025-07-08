import z from "zod";
import type { ListSummaryResponse } from "./list";

export type BoardSummaryResponse = {
  id: string;
  title: string;
  status: BoardStatus;
};

export type BoardDetailsResponse = {
  id: string;
  title: string;
  status: BoardStatus;
  lists: ListSummaryResponse[];
};

export type BoardStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";

export const BoardCreateRequestSchema = z.object({
  title: z.string().min(3).max(100),
});

export type BoardCreateRequest = z.infer<typeof BoardCreateRequestSchema>;
