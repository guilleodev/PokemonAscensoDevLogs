import { Link } from "react-router-dom";
import LogoMark from "../ui/LogoMark.jsx";
import { siteMeta } from "../../data/site.js";
import guilleODEVLogo from "../../../public/media/brand/logo/02.png"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__intro">
          <div className="site-footer__brand">
            <a href="https://github.com/guilleodev">
              <img
                className="site-footer__logoPersonal"
                src={guilleODEVLogo}
                alt="Guille ODEV"
              />
            </a>
            <div>
              <strong className="site-footer__title">Pokemon Ascenso</strong>
              <p className="site-footer__subtitle">Desarrollado por GuilleODEV</p>
            </div>
          </div>

          <p className="site-footer__description">
            Pokémon Ascenso es un proyecto fan no oficial.
            Pokémon, Pokémon logo, personajes, sprites y materiales relacionados pertenecen a Nintendo, Game Freak y The Pokémon Company.
            Este sitio no está afiliado, patrocinado ni aprobado por Nintendo, Game Freak o The Pokémon Company.
          </p>

          <div className="site-footer__actions">
            <Link className="site-footer__button site-footer__button--primary" to="/devlogs">
              Ver Devlogs
            </Link>
            <a className="site-footer__button site-footer__button--ghost" href="https://github.com/guilleodev">
              GitHub
            </a>
          </div>
        </div>

        <div className="site-footer__links">
          <p className="site-footer__links-title">Enlaces</p>

          <div className="site-footer__cards">
            <Link className="site-footer__card" to="/">
              <span className="site-footer__card-label">Home</span>
              <strong className="site-footer__card-title">Portada del proyecto</strong>
              <span className="site-footer__card-meta">Resumen visual y acceso rapido</span>
            </Link>

            <Link className="site-footer__card" to="/devlogs">
              <span className="site-footer__card-label">Devlogs</span>
              <strong className="site-footer__card-title">Historial de versiones</strong>
              <span className="site-footer__card-meta">Cambios, capturas y progreso</span>
            </Link>

            <a className="site-footer__card" href={siteMeta.repositoryUrl}>
              <span className="site-footer__card-label">Repositorio</span>
              <strong className="site-footer__card-title">{siteMeta.repositoryLabel}</strong>
              <span className="site-footer__card-meta">Codigo y despliegue del sitio</span>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__note">
          © 2026 Pokemon Ascenso. Desarrollado por guilleODEV.

        </p>
        <div className="site-footer__bottom-links">
          <Link to="/">Home</Link>
          <span>•</span>
          <Link to="/devlogs">Devlogs</Link>
          <span>•</span>
          <a href="#top">Volver arriba</a>
        </div>
      </div>
    </footer>
  );
}
