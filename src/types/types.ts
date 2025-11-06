import type { IconType } from "react-icons";

export interface IAppContext {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
  data: IData;
}

export type IData = {
  header: IHeader;
  footer: IFooter;
  hero: IHero;
  about: IAbout;
  education: IEducationItem[];
  skills: ISkill[];
  experience: IExperienceItem[];
  projects: IProject[];
  contact: IContact;
};

export type IHero = {
  subtitle: string;
  title: string;
  tagline: { start: string; end: string };
  typed: string[];
};

export type IAbout = {
  title: string;
  description: string;
  highlights?: { value: string; label: string }[];
};

export type IEducationItem = {
  degree: string;
  field: string;
  school: string;
  year: string;
};

export type ISkill = {
  title: string;
  iconColor: string;
  skills: { name: string; Icon: IconType }[];
};

export type IExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};
export type IProject = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  links: { github: string; live: string };
};

export type IContact = {
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  social: { platform: string; url: string; Icon: IconType }[];
};

export type IHeader = {
  title: string;
};

export type IFooter = {
  socialLinks: {
    platform: string;
    url: string;
    Icon: IconType;
  }[];
  copyrightText: string;
};
