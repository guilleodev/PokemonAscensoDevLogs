import Section from "../layout/Section.jsx";
import DevlogEntry from "./DevlogEntry.jsx";

export default function DevlogArchive({ entries }) {
  return (
    <Section
      id="archive"
      eyebrow="Archivo"
      title="Linea completa de versiones"
      description="El archivo esta preparado para crecer build a build y convertirse en una memoria publica del desarrollo del proyecto."
    >
      <div className="devlog-archive">
        {entries.map((entry) => (
          <DevlogEntry entry={entry} key={entry.slug} />
        ))}
      </div>
    </Section>
  );
}
