import { useState } from "react";
import Tag from "../ui/Tag.jsx";
import VersionBadge from "../ui/VersionBadge.jsx";
import AutoMediaGrid from "../ui/AutoMediaGrid.jsx";
import { buildGallerySlots } from "../../utils/mediaSlots.js";

function EntryMedia({ version, title }) {
  const slotCandidates = buildGallerySlots(`/media/versions/${version}`, 6, true);
  return (
    <AutoMediaGrid
      slotCandidates={slotCandidates}
      baseAlt={title}
      gridClassName="entry-media__grid"
      itemClassName="entry-media__item"
      placeholder={`public/media/versions/${version}/01`}
      captionBuilder={(index) => ({
        title: `${version} · ${title}`,
        text: `Captura o video ${index + 1} de esta version publica del proyecto.`
      })}
    />
  );
}

export default function DevlogEntry({ entry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`devlog-entry ${expanded ? "is-expanded" : ""}`}>
      <button
        className="devlog-entry__header"
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        <div className="devlog-entry__heading">
          <div className="devlog-entry__meta">
            <VersionBadge version={entry.publicVersion} />
            <Tag>{entry.stage}</Tag>
            <span className="folder-badge">
              <span className="folder-badge__icon" aria-hidden="true" />
              {entry.realFolder}
            </span>
          </div>
          <h2>{entry.title}</h2>
          <p>{entry.summary}</p>
        </div>

        <span className="devlog-entry__toggle">{expanded ? "Cerrar" : "Abrir"}</span>
      </button>

      {expanded ? (
        <div className="devlog-entry__content">
          <div className="devlog-entry__text">
            <div className="devlog-entry__block">
              <h3>Cambios visibles</h3>
              <ol className="devlog-entry__list">
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            <div className="devlog-entry__block">
              <h3>Por que importa esta version</h3>
              <p>{entry.longDescription}</p>
            </div>
          </div>

          <div className="devlog-entry__media">
            <h3>Capturas y video</h3>
            <EntryMedia version={entry.publicVersion} title={entry.title} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
