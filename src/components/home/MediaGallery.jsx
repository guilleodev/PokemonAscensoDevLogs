import Section from "../layout/Section.jsx";
import AutoMediaGrid from "../ui/AutoMediaGrid.jsx";
import { buildGallerySlots } from "../../utils/mediaSlots.js";

export default function MediaGallery() {
  const gallerySlots = buildGallerySlots("/media/home/captures", 6, false);

  return (
    <Section
      id="media"
      eyebrow="Capturas"
      title="Una galería visual del proyecto"
      description="Algunas imágenes de la progresión del juego."
    >
      <AutoMediaGrid
        slotCandidates={gallerySlots}
        baseAlt="Captura Home"
        gridClassName="media-gallery"
        itemClassName="media-gallery__item"
        placeholder="public/media/home/captures/01"
        captionBuilder={(index) => ({
          title: `Home · Captura ${index + 1}`,
          text: `Vista destacada del desarrollo de Pokemon Ascenso desde la portada del sitio.`
        })}
      />
    </Section>
  );
}
