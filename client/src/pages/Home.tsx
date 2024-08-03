import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule";
import Trips from "../components/Trips";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
      <Footer />
    </div>
  );
}
