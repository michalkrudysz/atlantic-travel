import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
import burgerMenu from "../assets/icons/burger-menu.svg";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSVG = localStorage.getItem("logoSVG");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={`${classes.header} ${menuOpen ? classes.open : ""}`}>
      <div className={classes.logo} onClick={handleLogoClick}>
        {logoSVG && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<img src="data:image/svg+xml;base64,${btoa(
                logoSVG
              )}" alt="logo" />`,
            }}
          />
        )}
      </div>
      <div className={classes["burger-menu"]}>
        <img onClick={toggleMenu} src={burgerMenu} alt="burger menu" />
      </div>
      {menuOpen && (
        // @ts-ignore
        <Menu />
      )}
    </header>
  );
}
