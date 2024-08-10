import classes from "./About.module.scss";

export default function About() {
  return (
    <div className={classes.about}>
      <h1>O firmie</h1>
      <div className={classes.container}>
        <p>
          Z przyjemnością przedstawiamy ofertę biura turystycznego "Atlantic".
          Specjalizujemy się w organizacji różnorodnych wycieczek, imprez
          turystycznych, kolonii i obozów młodzieżowych, zarówno w kraju, jak i
          za granicą. Nasze propozycje są starannie dostosowane do Państwa
          preferencji, życzeń i zainteresowań. Mamy nadzieję, że nasza oferta
          okaże się na tyle atrakcyjna, by każdy znalazł odpowiadający mu
          standard usług i miejsce wypoczynku. Przez lata zdobyliśmy zaufanie
          wielu firm i instytucji, organizując dla nich udane imprezy
          turystyczne. Staliśmy się rzetelnym i wiarygodnym partnerem, o czym
          świadczą liczne listy gratulacyjne dostępne do wglądu w naszym biurze.
          <span>"Atlantic"</span> oferuje elastyczne podejście do organizacji
          imprez turystycznych. Jesteśmy w stanie przygotować wyjazd w dowolnie
          wybranym miejscu, terminie i o standardzie zgodnym z Państwa
          oczekiwaniami. Dodatkowo organizujemy imprezy integracyjne, wyjazdy
          motywacyjne, konferencje i szkolenia.
        </p>
        <p>
          <span>
            Serdecznie zapraszamy do współpracy i korzystania z naszych usług.
            Biuro Usługowo-Turystyczne "Atlantic" posiada Zezwolenie Wojewody
            Podkarpackiego z dnia 28.07.1999r. Nr IT.VIII-4229/2/99 na
            Działalność Gospodarczą w Zakresie Organizowania Imprez
            Turystycznych nr Rej. 013/99.
          </span>
        </p>
      </div>
    </div>
  );
}
