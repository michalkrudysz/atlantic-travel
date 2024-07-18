import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule";
import Trips from "../components/Trips";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
    </div>
  );
}
