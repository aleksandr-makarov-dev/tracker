import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../pages/home-page";
import { KanbanPage } from "../pages/kanban-page";

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
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
