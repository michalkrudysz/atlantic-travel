import classes from "./WelcomeModule.module.scss";
import backgroundImage from "../../public/background.png";

export default function WelcomeModule() {
  return (
    <div className={classes.container}>
      <div className={classes.backgroundImageWrapper}>
        <img
          src={backgroundImage}
          alt="Background"
          className={classes.backgroundImage}
        />
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.text}>
        <p>
          <span>Jesteśmy ekspertami od niezapomnianych przygód!</span>
          Czy marzysz o ekscytującej wycieczce czy wyjątkowym obozie
          młodzieżowym - mamy coś dla Ciebie, zarówno w Polsce, jak i za
          granicą. Każdą ofertę dopasowujemy do Twoich upodobań i zainteresowań,
          bo wiemy, że najlepsze podróże to te, które spełniają marzenia. Z nami
          przeżyjesz podróż życia, skrojoną dokładnie na Twoją miarę!
        </p>
      </div>
    </div>
  );
}
