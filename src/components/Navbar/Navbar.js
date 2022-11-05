import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <button
        className="navbar-expand-btn"
        onClick={props.toggleNavLinksDisplay}
      >
        More
      </button>
      {props.isNavLinksShown && (
        <NavLinks
          navigationRefs={props.navigationRefs}
          toggleNavLinksDisplay={props.toggleNavLinksDisplay}
        />
      )}
    </div>
  );
};

export default Navbar;
