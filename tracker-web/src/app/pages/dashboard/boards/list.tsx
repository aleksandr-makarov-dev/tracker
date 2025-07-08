import DashboardLayout from "@/components/layouts/dashboard-layout";
import { paths } from "@/config/paths";
import { useBoards } from "@/features/boards/api/get-boards";
import { NavLink } from "react-router";

export function DashboardBoardListPage() {
  const boardsQuery = useBoards();

  return (
    <DashboardLayout>
      {boardsQuery.data?.data?.map((board) => (
        <div>
          <NavLink to={paths.dashboard.board.getHref(board.id)}>
            {board.title}
          </NavLink>
        </div>
      ))}
    </DashboardLayout>
  );
}
