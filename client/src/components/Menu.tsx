import classes from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={classes.menu}>
      <ul>
        <li>Nasza oferta</li>
        <li>Referencje</li>
        <li>O firmie</li>
        <li>Kontakt</li>
        <li>Rodo</li>
      </ul>
    </div>
  );
}
