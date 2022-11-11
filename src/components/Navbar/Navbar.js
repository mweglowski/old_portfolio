import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-logo-button-wrapper">
        <div className="navbar-logo">Martin</div>

        <button
          className="navbar-expand-btn"
          onClick={props.toggleNavLinksDisplay}
        >
          {!props.isNavLinksShown ? (
            <div className="lines">
              <div className="first-line line"></div>
              <div className="second-line line"></div>
              <div className="third-line line"></div>
            </div>
          ) : (
            <div className="lines">
              <div className="first-line line animate-first"></div>
              <div className="second-line line animate-second"></div>
              <div className="third-line line animate-third"></div>
            </div>
          )}
        </button>
      </div>
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
