import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
import SchoolTrips from "../components/SchoolTrips";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
      <SchoolTrips />
      <Testimonials />
      <Footer />
    </div>
  );
}
