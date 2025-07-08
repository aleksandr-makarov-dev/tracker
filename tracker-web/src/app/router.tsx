import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/home-page";
import { KanbanPage } from "./pages/kanban-page";
import { paths } from "@/config/paths";
import { DashboardBoardListPage } from "./pages/dashboard/boards/list";
import { DashboardBoardDetailsPage } from "./pages/dashboard/boards/details";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/kanban",
      element: <KanbanPage />,
    },
    {
      path: paths.dashboard.boards.path,
      element: <DashboardBoardListPage />,
    },
    {
      path: paths.dashboard.board.path,
      element: <DashboardBoardDetailsPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
