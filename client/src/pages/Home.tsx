import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule.tsx";
import Trips from "../components/Trips.tsx";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
    </div>
  );
}
