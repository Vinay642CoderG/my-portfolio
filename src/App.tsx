import { Route, Routes } from "react-router";
import GlobalStyles from "@/styles/GlobalStyles";
import MainLayout from "@/layouts/MainLayout";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/home/Home"));
const Projects = lazy(() => import("@/pages/projects/Projects"));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
