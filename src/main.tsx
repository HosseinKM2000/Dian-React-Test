import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./languages/configure";
import Routing from "./routes";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
