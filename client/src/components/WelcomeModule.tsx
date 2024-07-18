import classes from "./WelcomeModule.module.scss";

export default function WelcomeModule() {
  return (
    <div className={classes.container}>
      <h1>Podróże Szyte na Miarę!</h1>
      <div className={classes.text}>
        <p>
          Jesteśmy ekspertami od niezapomnianych przygód! Czy marzysz o
          ekscytującej wycieczce czy wyjątkowym obozie młodzieżowym - mamy coś
          dla Ciebie, zarówno w Polsce, jak i za granicą. Każdą ofertę
          dopasowujemy do Twoich upodobań i zainteresowań, bo wiemy, że
          najlepsze podróże to te, które spełniają marzenia. Z nami przeżyjesz
          podróż życia, skrojoną dokładnie na Twoją miarę!
        </p>
      </div>
    </div>
  );
}
