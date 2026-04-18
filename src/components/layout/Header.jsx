import { Link, NavLink } from "react-router-dom";
import LogoMark from "../ui/LogoMark.jsx";

export default function Header({ title, compact = false }) {
  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <div className="site-header__brand">
        <LogoMark className="site-header__logo" />
        <div className="site-header__brand-text">
          <span className="site-header__eyebrow">Archivo de desarrollo</span>
          <Link className="site-header__title" to="/">
            {title}
          </Link>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Secciones principales">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/devlogs">Devlogs</NavLink>
      </nav>
    </header>
  );
}
