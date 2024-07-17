import { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import logo from "../../public/logo.svg";
import burgerMenu from "../assets/icons/burger-menu.svg";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className={`${classes.header} ${menuOpen ? classes.open : ""}`}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes["burger-menu"]}>
        <img onClick={toggleMenu} src={burgerMenu} alt="burger menu" />
      </div>
      {menuOpen && <Menu />}
    </header>
  );
}
