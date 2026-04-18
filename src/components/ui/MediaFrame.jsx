export default function MediaFrame({ title, description, hint, type, src }) {
  const isVideo = type === "video";

  return (
    <article className="media-frame">
      <div className="media-frame__preview">
        {src ? (
          isVideo ? (
            <video controls preload="metadata" src={src} />
          ) : (
            <img src={src} alt={title} />
          )
        ) : (
          <div className="media-frame__placeholder">
            <span>{isVideo ? "Video pendiente" : "Captura pendiente"}</span>
          </div>
        )}
      </div>
      <div className="media-frame__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{hint}</small>
      </div>
    </article>
  );
}
