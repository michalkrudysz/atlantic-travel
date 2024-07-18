import classes from "./WelcomeModule.module.scss";

export default function WelcomeModule() {
  return (
    <div className={classes.container}>
      <h1>Spełniamy Podróżnicze Marzenia!</h1>
      <div className={classes.text}>
        <p>
          Specjalizujemy się w kreowaniu niezapomnianych doświadczeń
          podróżniczych. Od ekscytujących wycieczek po inspirujące obozy
          młodzieżowe - tworzymy wyjątkowe przygody w kraju i za granicą. Każdą
          propozycję starannie dopasowujemy do Twoich życzeń, gustów i
          zainteresowań, gwarantując podróże szyte na miarę Twoich marzeń.
        </p>
      </div>
    </div>
  );
}
