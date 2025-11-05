import { createContext, useContext, type ReactNode } from "react";
import type { IAppContext } from "../types/types";

export const AppContext = createContext<IAppContext | null>(null);

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
