const imageExtensions = ["webp", "png", "PNG", "jpg", "JPG", "jpeg", "JPEG", "avif", "AVIF"];
const videoExtensions = ["mp4", "MP4", "webm", "WEBM"];

function pad(number) {
  return String(number).padStart(2, "0");
}

export function buildSlotCandidates(basePath, slot, allowVideo = true) {
  const slotId = pad(slot);
  const imagePaths = imageExtensions.map((extension) => `${basePath}/${slotId}.${extension}`);
  const videoPaths = allowVideo
    ? videoExtensions.map((extension) => `${basePath}/${slotId}.${extension}`)
    : [];

  return [
    ...imagePaths.map((src) => ({ src, type: "image" })),
    ...videoPaths.map((src) => ({ src, type: "video" }))
  ];
}

export function buildGallerySlots(basePath, count, allowVideo = true) {
  return Array.from({ length: count }, (_, index) =>
    buildSlotCandidates(basePath, index + 1, allowVideo)
  );
}
