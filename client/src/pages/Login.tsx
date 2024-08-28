import classes from "./Login.module.scss";

export default function Login() {
  return (
    <div className={classes.login}>
      <div className={classes["login-container"]}>
        <h2>Wprowadź hasło</h2>
        <input type="password" className={classes["login-input"]} />
        <button className={classes["login-button"]}>Zaloguj się</button>
      </div>
    </div>
  );
}
