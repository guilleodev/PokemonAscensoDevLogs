export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__heading">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section__description">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
