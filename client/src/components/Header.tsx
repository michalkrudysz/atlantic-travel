import classes from "./Header.module.scss";
import logo from "../../public/logo.svg";
import burgerMenu from "../assets/icons/burger-menu.svg";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes["burger-menu"]}>
        <img src={burgerMenu} alt="logo" />
      </div>
    </header>
  );
}
