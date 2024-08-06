import classes from "./SchoolTripDetails.module.scss";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function SchoolTripDetails() {
  const { schoolTrips } = useParams();

  return (
    <div className={classes["school-trip-details"]}>
      <div className={classes.title}>
        <h1>{schoolTrips!.charAt(0).toUpperCase() + schoolTrips!.slice(1)}</h1>
      </div>
      <div className={classes.container}>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
        <div className={classes["trip-details"]}>
          <h1>Bałtów</h1>
          <h2>Pogram zwiedzania</h2>
          <p>
            „Park Jurajski” w Bałtowie (wędrówka ścieżką edukacyjną wraz z
            przewodnikiem prowadzącą przez poszczególne epoki geologiczne.
            Rekonstrukcje dinozaurów naturalnej wielkości, Muzeum jurajskie,
            plac zabaw. Dodatkowo możliwość organizacji zajęć edukacyjnych np.
            płukanie złota).
          </p>
          <p>
            <span>Świadczenia: </span>
            autokar, parkingi, pilot - przewodnik, bilet wstępu.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
