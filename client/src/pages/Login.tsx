import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import classes from "./Login.module.scss";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin(setError);

  const handleLogin = () => {
    mutate(password, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <div className={classes.login}>
      <div className={classes["login-container"]}>
        <h2>Wprowadź hasło</h2>
        <input
          type="password"
          className={classes["login-input"]}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
        <button
          type="button"
          className={classes["login-button"]}
          onClick={handleLogin}
          disabled={isPending}
        >
          {isPending ? "Logowanie..." : "Zaloguj się"}
        </button>
        {error && (
          <div className={classes["login-error"]}>
            Błędne logowanie spróbuj jeszcze raz!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
