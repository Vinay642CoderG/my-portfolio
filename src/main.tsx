import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter
        future={{ v7_relativeSplatPath: false, v7_startTransition: false }}
      >
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
);
