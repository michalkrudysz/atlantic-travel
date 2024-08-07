import classes from "./LoadingPage.module.scss";
import logo from "../../public/logo.svg";
import ReactDOM from "react-dom/client";

let loadingRoot: ReactDOM.Root | null = null;

export function activateLoading() {
  const loadingDiv = document.getElementById("loading");
  if (loadingDiv && !loadingRoot) {
    loadingRoot = ReactDOM.createRoot(loadingDiv);
  }
  if (loadingRoot) {
    loadingRoot.render(<LoadingPage />);
  }
}

export function deactivateLoading() {
  if (loadingRoot) {
    setTimeout(() => {
      if (loadingRoot) {
        loadingRoot.unmount();
      }
    }, 0);
  }
}

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
