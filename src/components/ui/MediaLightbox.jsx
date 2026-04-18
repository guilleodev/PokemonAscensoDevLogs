import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MediaLightboxContext = createContext(null);

export function MediaLightboxProvider({ children }) {
  const [activeMedia, setActiveMedia] = useState(null);

  const value = useMemo(
    () => ({
      openMedia: (media) =>
        setActiveMedia({
          ...media,
          setIndex: (index) =>
            setActiveMedia((previous) =>
              previous
                ? {
                    ...previous,
                    index
                  }
                : previous
            )
        }),
      closeMedia: () => setActiveMedia(null)
    }),
    []
  );

  return (
    <MediaLightboxContext.Provider value={value}>
      {children}
      {activeMedia ? <MediaLightbox media={activeMedia} onClose={value.closeMedia} /> : null}
    </MediaLightboxContext.Provider>
  );
}

export function useMediaLightbox() {
  return useContext(MediaLightboxContext);
}

function MediaLightbox({ media, onClose }) {
  const items = media.items?.length ? media.items : [media];
  const currentIndex = media.index ?? 0;
  const currentMedia = items[currentIndex] ?? items[0];
  const hasMultiple = items.length > 1;
  const [candidateIndex, setCandidateIndex] = useState(0);
  const resolvedMedia = currentMedia.candidates?.[candidateIndex] ?? currentMedia;

  function goTo(direction) {
    const nextIndex = (currentIndex + direction + items.length) % items.length;
    media.setIndex?.(nextIndex);
  }

  useEffect(() => {
    setCandidateIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }

      if (hasMultiple && event.key === "ArrowRight") {
        goTo(1);
      }

      if (hasMultiple && event.key === "ArrowLeft") {
        goTo(-1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, onClose, currentIndex]);

  return (
    <div
      className="media-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de media"
      onClick={onClose}
    >
      <button
        className="media-lightbox__close"
        type="button"
        aria-label="Cerrar visor"
        onClick={onClose}
      >
        Cerrar
      </button>

      <figure className="media-lightbox__frame" onClick={(event) => event.stopPropagation()}>
        {hasMultiple ? (
          <>
            <button
              className="media-lightbox__nav media-lightbox__nav--prev"
              type="button"
              aria-label="Media anterior"
              onClick={() => goTo(-1)}
            >
              ‹
            </button>
            <button
              className="media-lightbox__nav media-lightbox__nav--next"
              type="button"
              aria-label="Media siguiente"
              onClick={() => goTo(1)}
            >
              ›
            </button>
          </>
        ) : null}

        <div className="media-lightbox__media">
          {resolvedMedia.type === "video" ? (
            <video
              controls
              autoPlay
              playsInline
              src={resolvedMedia.src}
              onError={() => setCandidateIndex((value) => value + 1)}
            />
          ) : (
            <img
              src={resolvedMedia.src}
              alt={currentMedia.alt}
              onError={() => setCandidateIndex((value) => value + 1)}
            />
          )}
        </div>

        <figcaption className="media-lightbox__caption">
          <strong>{currentMedia.captionTitle || currentMedia.alt}</strong>
          {currentMedia.captionText ? <p>{currentMedia.captionText}</p> : null}
          {hasMultiple ? (
            <span className="media-lightbox__counter">
              {currentIndex + 1} / {items.length}
            </span>
          ) : null}
        </figcaption>

        {hasMultiple ? (
          <div className="media-lightbox__thumbs" aria-label="Miniaturas de galeria">
            {items.map((item, index) => (
              <LightboxThumb
                key={`${item.alt}-${index}`}
                item={item}
                isActive={index === currentIndex}
                onClick={() => media.setIndex?.(index)}
              />
            ))}
          </div>
        ) : null}
      </figure>
    </div>
  );
}

function LightboxThumb({ item, isActive, onClick }) {
  const [thumbIndex, setThumbIndex] = useState(0);
  const thumb = item.candidates?.[thumbIndex] ?? item;

  return (
    <button
      type="button"
      className={`media-lightbox__thumb ${isActive ? "is-active" : ""}`}
      onClick={onClick}
      aria-label={item.captionTitle || item.alt}
    >
      {thumb.type === "video" ? (
        <video
          muted
          playsInline
          preload="metadata"
          src={thumb.src}
          onError={() => setThumbIndex((value) => value + 1)}
        />
      ) : (
        <img
          src={thumb.src}
          alt={item.alt}
          onError={() => setThumbIndex((value) => value + 1)}
        />
      )}
    </button>
  );
}
