import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  );
}
