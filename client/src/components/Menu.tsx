import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Menu.module.scss";

type SetMenuOpenType = (open: boolean) => void;

type MenuProps = {
  setMenuOpen: SetMenuOpenType;
};

export default function Menu({ setMenuOpen }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true, state: { scrollToId: id } });
    } else {
      scrollToSection(id);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToId) {
      scrollToSection(location.state.scrollToId);
      history.replaceState(null, "");
    }
  }, [location]);

  return (
    <div className={classes.menu} ref={menuRef}>
      <ul>
        <li onClick={() => handleNavigation("trips")}>Nasza oferta</li>
        <li onClick={() => handleNavigation("testimonials")}>Referencje</li>
        <li onClick={() => handleNavigation("about")}>O firmie</li>
        <li onClick={() => handleNavigation("contact")}>Kontakt</li>
      </ul>
    </div>
  );
}
