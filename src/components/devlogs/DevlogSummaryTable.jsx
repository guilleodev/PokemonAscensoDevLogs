import Section from "../layout/Section.jsx";

export default function DevlogSummaryTable({ entries }) {
  return (
    <Section
      id="summary"
      eyebrow="Resumen"
      title="Versiones de un vistazo"
      description="Una tabla rapida para ver toda la evolucion publica sin entrar en el detalle de cada build."
    >
      <div className="summary-table-wrap">
        <table className="summary-table">
          <thead>
            <tr>
              <th>Version publica</th>
              <th>Titulo</th>
              <th>Carpeta original</th>
              <th>Etapa</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.slug}>
                <td>
                  <span className="version-badge">{entry.publicVersion}</span>
                </td>
                <td>{entry.title}</td>
                <td>
                  <span className="folder-badge folder-badge--table">
                    <span className="folder-badge__icon" aria-hidden="true" />
                    {entry.realFolder}
                  </span>
                </td>
                <td>{entry.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
