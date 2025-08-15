import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/logo.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a onClick={scrollToContact} href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? (
          <IoClose size={30} color="#ffff" />
        ) : (
          <GiHamburgerMenu size={30} color="#907055" />
        )}
      </div>

      <ul
        onClick={toggleMenu}
        className={isOpen ? "nav-links open" : "nav-links"}
      >
        <li>
          <NavLink to="/animal"> Om dyrerne </NavLink>
        </li>
        <li>
          <NavLink to="/adopt"> Adoptere </NavLink>
        </li>
        <li>
          <NavLink to="/about"> Om cafeen </NavLink>
        </li>
        <li>
          <NavLink to="/Menu"> Menu </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Kontakt </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
