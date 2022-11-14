import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = (props) => {
  const scrollToHomeSectionHandler = (e) => {
    e.preventDefault();
    props.navigationRefs.homeSectionRef.current.scrollIntoView();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo-button-wrapper">
        <button className="navbar-logo" onClick={scrollToHomeSectionHandler}>
          Martin
        </button>

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
      <NavLinks
        navigationRefs={props.navigationRefs}
        toggleNavLinksDisplay={props.toggleNavLinksDisplay}
        isNavLinksShown={props.isNavLinksShown}
      />
    </div>
  );
};

export default Navbar;
