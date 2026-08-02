import ContactMePage from "../components/pages/ContactMePage"
import Navbar from "../components/sections/Navbar";
import Foooter from "../components/sections/Footer";
import Loader from "../components/sections/Loader";

const Contact = () => {
  return (
    <div>
      <Loader />
        <Navbar />
        <ContactMePage />
        <Foooter />
    </div>
  )
}

export default Contact