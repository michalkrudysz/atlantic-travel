import classes from "./LoadingPage.module.scss";
import logo from "../../public/logo.svg";

export default function LoadingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <img src={logo} alt="logo" />
        <div className={classes.text}>Ładowanie treści...</div>
      </div>
    </div>
  );
}
