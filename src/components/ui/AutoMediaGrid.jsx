import AutoMediaSlot from "./AutoMediaSlot.jsx";

export default function AutoMediaGrid({
  slotCandidates,
  baseAlt,
  itemClassName = "",
  gridClassName = "",
  placeholder = "public/media/",
  captionBuilder
}) {
  const galleryItems = slotCandidates.map((candidates, index) => {
    const caption = captionBuilder ? captionBuilder(index) : null;

    return {
      candidates,
      alt: `${baseAlt} ${index + 1}`,
      captionTitle: caption ? caption.title : `${baseAlt} ${index + 1}`,
      captionText: caption ? caption.text : ""
    };
  });

  return (
    <div className={`auto-media-grid ${gridClassName}`.trim()}>
      {slotCandidates.map((candidates, index) => {
        const caption = captionBuilder ? captionBuilder(index) : null;

        return (
          <AutoMediaSlot
            key={`${baseAlt}-${index}`}
            candidates={candidates}
            alt={`${baseAlt} ${index + 1}`}
            className={itemClassName}
            placeholder={placeholder}
            captionTitle={caption ? caption.title : `${baseAlt} ${index + 1}`}
            captionText={caption ? caption.text : ""}
            galleryItems={galleryItems}
            mediaIndex={index}
          />
        );
      })}
    </div>
  );
}
