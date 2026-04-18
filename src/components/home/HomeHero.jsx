import { Link } from "react-router-dom";
import Tag from "../ui/Tag.jsx";
import AutoMediaSlot from "../ui/AutoMediaSlot.jsx";
import { buildSlotCandidates } from "../../utils/mediaSlots.js";
import LogoMark from "../ui/LogoMark.jsx";

export default function HomeHero({ meta, intro }) {
  const heroVideo = buildSlotCandidates("/media/home/hero-video", 1, true);

  return (
    <section className="home-hero" id="top">
      <div className="hero-video-layer" aria-hidden="true">
        <AutoMediaSlot
          candidates={heroVideo}
          alt="Video de portada Pokemon Ascenso"
          className="hero-video-layer__media"
          placeholder=""
          backgroundVideo
        />
      </div>
      <div className="hero-video-layer__overlay" aria-hidden="true" />

      <div className="home-hero__copy home-hero__copy--centered">
        <LogoMark className="hero-logo" />
        <Tag tone="accent">{meta.status}</Tag>
        <h1></h1>
        <p className="home-hero__description">{intro}</p>

        <div className="hero__actions">
          <Link className="button button--primary" to="/devlogs">
            Abrir Devlogs
          </Link>
          <a className="button button--ghost" href="#media">
            Ver capturas
          </a>
        </div>
      </div>
    </section>
  );
}
