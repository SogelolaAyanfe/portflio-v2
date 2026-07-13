import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
