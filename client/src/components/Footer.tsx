import classes from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.company}>
        <p>
          &copy; 1999 - {currentYear} <span>AtlanticTravel.pl</span>
        </p>
      </div>
      <div className={classes.author}>
        <p>
          Realizacja:{" "}
          <a href="https://krudysz.pl/">
            <span>Michał Krudysz</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
