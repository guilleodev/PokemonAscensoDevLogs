import { Link } from "react-router-dom";
import Section from "../layout/Section.jsx";

export default function HomeDevlogsIntro({ pitch, latest }) {
  return (
    <Section
      id="devlogs-preview"
      eyebrow="Devlogs"
      title="El desarrollo del proyecto"
      description={pitch}
    >
      <div className="home-devlogs-intro">
        <div className="home-devlogs-intro__copy">
          <p>
            La seccion `Devlogs` es el centro real del sitio: cada build importante
            tiene nombre publico, numero de version, lista de cambios visibles,
            explicacion larga y espacio para capturas o video.
          </p>
          <Link className="button button--primary" to="/devlogs">
            Ver Devlogs
          </Link>
        </div>

        <div className="home-devlogs-intro__highlight">
          <span>Última build: </span>
          <strong>
            {latest.publicVersion} · {latest.title}
          </strong>
          <p>{latest.summary}</p>
        </div>
      </div>
    </Section>
  );
}
