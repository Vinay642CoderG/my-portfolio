import React, { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";
import type { IAppContext } from "@/types/types";
import homeData from "@/data/homeData";

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // default theme

  const value: IAppContext = {
    theme,
    setTheme,
    homeData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
