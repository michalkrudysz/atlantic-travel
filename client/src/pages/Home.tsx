import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule.tsx";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
    </div>
  );
}
