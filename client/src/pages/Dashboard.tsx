import classes from "./Dashboard.module.scss";
import Trips from "../components/Dashboard/Trips";

export default function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <Trips />
    </div>
  );
}
