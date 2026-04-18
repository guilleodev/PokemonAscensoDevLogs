import Section from "../layout/Section.jsx";
import AutoMediaSlot from "../ui/AutoMediaSlot.jsx";
import { buildSlotCandidates } from "../../utils/mediaSlots.js";

export default function DevlogsIntro() {
  const archiveImage = buildSlotCandidates("/media/devlogs/archive", 1, false);

  return (
    <Section
      id="contexto"
      eyebrow="Contexto"
      title="Del archivo real al archivo publico"
      description="Pokemon Ascenso ha pasado por muchisimas iteraciones internas antes de esta organizacion publica."
    >
      <div className="devlogs-intro">
        <div className="devlogs-intro__copy">
          <p>
            El proyecto acumula mas de 200 versiones reales en esta carpeta de trabajo.
            Para poder contar su evolucion de una forma mas clara y publica, he decidido
            reorganizar los grandes hitos bajo un versionado semantico `0.x.x`.
          </p>
          <p>
            Eso significa que las versiones que ves en esta web son una lectura ordenada
            del progreso del juego, mientras que los nombres originales siguen siendo
            carpetas como `v1`, `v24.3`, `v58`, `v91.9` o `v97.3`.
          </p>
        </div>

        <div className="devlogs-intro__image">
          <AutoMediaSlot
            candidates={archiveImage}
            alt="Captura de las carpetas originales del proyecto"
            className="devlogs-intro__image-slot"
            placeholder="public/media/devlogs/archive/01"
            captionTitle="Archivo original del proyecto"
            captionText="Vista de la carpeta de trabajo con mas de 200 versiones internas reales."
          />
        </div>
      </div>
    </Section>
  );
}
