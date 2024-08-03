import { useEffect, useRef } from "react";
import classes from "./Menu.module.scss";

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    if (menu) {
      menu.addEventListener("wheel", preventWheel, { passive: false });
      menu.addEventListener("touchmove", preventTouchMove, { passive: false });

      return () => {
        if (menu) {
          menu.removeEventListener("wheel", preventWheel);
          menu.removeEventListener("touchmove", preventTouchMove);
        }
      };
    }
  }, []);

  return (
    <div className={classes.menu} ref={menuRef}>
      <ul>
        <li>Nasza oferta</li>
        <li>Referencje</li>
        <li>O firmie</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
}
