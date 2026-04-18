import { useMemo, useState } from "react";
import { useMediaLightbox } from "./MediaLightbox.jsx";

export default function AutoMediaSlot({
  candidates,
  alt,
  className = "",
  placeholder = "public/media/",
  backgroundVideo = false,
  captionTitle = "",
  captionText = "",
  interactive = true,
  galleryItems,
  mediaIndex = 0
}) {
  const [index, setIndex] = useState(0);
  const current = candidates[index];
  const lightbox = useMediaLightbox();

  const content = useMemo(() => {
    if (!current) {
      return (
        <div className="auto-media-slot__placeholder">
          <span>{placeholder}</span>
        </div>
      );
    }

    if (current.type === "video") {
      return (
        <video
          controls={!backgroundVideo}
          autoPlay={backgroundVideo}
          muted={backgroundVideo}
          loop={backgroundVideo}
          playsInline={backgroundVideo}
          preload={backgroundVideo ? "auto" : "metadata"}
          src={current.src}
          onError={() => setIndex((value) => value + 1)}
        />
      );
    }

    return <img src={current.src} alt={alt} onError={() => setIndex((value) => value + 1)} />;
  }, [alt, current, placeholder]);

  if (current && !backgroundVideo && interactive && lightbox) {
    return (
      <button
        type="button"
        className={`auto-media-slot auto-media-slot--interactive ${className}`.trim()}
        onClick={() =>
          lightbox.openMedia({
            ...current,
            alt,
            captionTitle,
            captionText,
            items: galleryItems,
            index: mediaIndex
          })
        }
      >
        {content}
      </button>
    );
  }

  return <div className={`auto-media-slot ${className}`.trim()}>{content}</div>;
}
