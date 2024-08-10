import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule";
import Trips from "../components/Trips";
import SchoolTrips from "../components/SchoolTrips";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
      <SchoolTrips />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
