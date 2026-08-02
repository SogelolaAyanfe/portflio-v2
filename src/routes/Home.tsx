import { LandingPage } from "../components/pages/LandingPage";
import Navbar from "../components/sections/Navbar";
import Loader from "../components/sections/Loader";

const Home = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Home;
