import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 100);
    };

    window.addEventListener("scroll", changeColor);

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1>Ayanfeoluwa</h1>
      </a>

      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/Projects" className="links" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="/Contact" className="links" onClick={closeMenu}>
            Contact
          </a>
        </li>

       
      </ul>

      <button
        className="Hamburger"
        onClick={toggleMenuOpen}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <FaTimes className="Fi" /> : <FaBars className="Fi" />}
      </button>
    </header>
  );
};

export default Navbar;
