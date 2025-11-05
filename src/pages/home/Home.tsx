import { lazy, Suspense } from "react";
import Loader from "@/components/loader/Loader";

// Lazy load sections
const Hero = lazy(() => import("@/components/hero/Hero"));
const About = lazy(() => import("@/components/about/About"));
const Education = lazy(() => import("@/components/education/Education"));
const Skills = lazy(() => import("@/components/skills/Skills"));
const Experience = lazy(() => import("@/components/experience/Experience"));
const Projects = lazy(() => import("@/components/projects/Projects"));
const Contact = lazy(() => import("@/components/contact/Contact"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Suspense>
  );
};

export default Home;
