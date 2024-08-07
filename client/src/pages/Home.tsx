import classes from "./Home.module.scss";
import WelcomeModule from "../components/WelcomeModule";
import Trips from "../components/Trips";
import Footer from "../components/Footer";
import SchoolTrips from "../components/SchoolTrips";
import LoadingPage from "./LoadingPage";
import { useTrips } from "../hooks/useTrips";

export default function Home() {
  const { isLoading, error } = useTrips();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={classes.home}>
      <WelcomeModule />
      <Trips />
      <SchoolTrips />
      <Footer />
    </div>
  );
}
