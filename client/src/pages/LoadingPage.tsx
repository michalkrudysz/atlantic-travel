import classes from "./LoadingPage.module.scss";
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
        loadingRoot = null;
      }
    }, 700);
  }
}

export default function LoadingPage() {
  const logoSVG = localStorage.getItem("logoSVG");
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        {logoSVG && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<img src="data:image/svg+xml;base64,${btoa(
                logoSVG
              )}" alt="logo" />`,
            }}
          />
        )}
        <div className={classes.text}>Ładowanie treści...</div>
      </div>
    </div>
  );
}
