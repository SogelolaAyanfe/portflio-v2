import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../src/components/sections/Loader"
import { lazyWithMinDelay } from "./lazyWithMinDelay";

const Home = lazy(lazyWithMinDelay(() => import("./routes/Home")));
const Contact = lazy(lazyWithMinDelay(() => import("./routes/Contact")));
const Projects = lazy(lazyWithMinDelay(() => import("./routes/Projects")));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};
