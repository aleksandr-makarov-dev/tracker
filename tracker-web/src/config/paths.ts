export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },

  auth: {
    register: {
      path: "/auth/register",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    login: {
      path: "/auth/login",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
  },

  dashboard: {
    root: {
      path: "/dashboard",
      getHref: () => "/dashboard",
    },
    boards: {
      path: "/dashboard/boards",
      getHref: () => "/dashboard/boards",
    },
    board: {
      path: "/dashboard/boards/:boardId",
      getHref: (boardId: string) => `/dashboard/boards/${boardId}`,
    },
  },
} as const;
