import { useState } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = (props) => {
  const [isNavLinksShown, setIsNavLinksShown] = useState(false);

  const toggleNavLinksDisplayHandler = () => {
    setIsNavLinksShown((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="navbar">
      <button
        className="navbar-expand-btn"
        onClick={toggleNavLinksDisplayHandler}
      >
        More
      </button>
      {isNavLinksShown && <NavLinks />}
    </div>
  );
};

export default Navbar;
