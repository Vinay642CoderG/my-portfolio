import { Route, Routes } from "react-router";
import GlobalStyles from "@/styles/GlobalStyles";
import MainLayout from "@/layouts/MainLayout";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("@/pages/home/Home"));
const Projects = lazy(() => import("@/pages/projects/Projects"));
const NotFound = lazy(() => import("@/pages/notfound/NotFound"));

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
