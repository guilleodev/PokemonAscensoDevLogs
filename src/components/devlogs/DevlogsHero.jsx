import AutoMediaSlot from "../ui/AutoMediaSlot.jsx";
import Tag from "../ui/Tag.jsx";
import { buildSlotCandidates } from "../../utils/mediaSlots.js";

export default function DevlogsHero() {
  const heroImage = buildSlotCandidates("/media/devlogs/hero", 1, false);

  return (
    <section className="devlogs-hero devlogs-hero--static">
      <div className="devlogs-hero__media" aria-hidden="true">
        <AutoMediaSlot
          candidates={heroImage}
          alt="Fondo Devlogs Pokemon Ascenso"
          className="devlogs-hero__media-slot"
          placeholder=""
          interactive={false}
        />
      </div>
      <div className="devlogs-hero__backdrop" aria-hidden="true" />
      <div className="devlogs-hero__copy home-hero__copy--centered">
        <div className="devlogs-hero__eyebrow-line" aria-hidden="true" />
        <h1>Devlogs</h1>
        <Tag tone="accent">Seccion principal</Tag>
        <p className="home-hero__description">
          Versiones, hitos y evolucion publica del proyecto.
        </p>
      </div>
    </section>
  );
}
