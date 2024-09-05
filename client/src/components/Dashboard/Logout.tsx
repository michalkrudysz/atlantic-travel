import { useNavigate } from "react-router-dom";
import classes from "./Logout.module.scss";

export default function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className={classes["logout"]}>
      <button className={classes["logout-button"]} onClick={handleLogout}>
        Wyloguj
      </button>
    </div>
  );
}
