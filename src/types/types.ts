import type { IHomeData } from "./homeData";

export interface IAppContext {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  homeData: IHomeData;
}
