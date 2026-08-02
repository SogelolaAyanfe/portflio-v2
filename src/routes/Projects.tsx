import ProjectsPage from "../components/pages/ProjectsPage";
import Navbar from "../components/sections/Navbar";
import Foooter from "../components/sections/Footer";
import Loader from "../components/sections/Loader";


const Projects = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <ProjectsPage />
      <Foooter />
    </div>
  );
};

export default Projects;
