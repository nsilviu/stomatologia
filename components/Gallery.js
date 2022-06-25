import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

function ImageIndex({ id, onExpand }) {
  return (
    <motion.img
      className="mb-1 rounded-md"
      src={`/gallery${id}.jpg`}
      alt=""
      onClick={() => onExpand(id)}
      layoutId={`gallery-${id}`}
    />
  );
}

function ProductImage({ id, onExpand }) {
  return (
    <motion.img
      src={`https://picsum.photos/id/${id}/200/200`}
      alt=""
      onClick={() => onExpand(id)}
      className="related-product-image"
      layoutId={`product-${id}`}
    />
  );
}

const Gallery = () => {
  const [galleryIds, setGalleryIds] = useState([2, 3, 4]);
  const [primaryGalleryId, setPrimaryGalleryId] = useState(1);

  function setAsPrimary(id) {
    const currentGalleryId = primaryGalleryId;
    const newGalleryIds = [
      ...galleryIds.filter((x) => x !== id),
      currentGalleryId,
    ];
    setPrimaryGalleryId(id);
    setGalleryIds(newGalleryIds);
  }

  return (
    <div className="m-4 flex flex-row align-middle">
      <AnimateSharedLayout type="crossfade">
        <main className="relative min-h-full min-w-[80vw]">
          <AnimatePresence>
            <motion.img
              key={primaryGalleryId}
              src={`/gallery${primaryGalleryId}.jpg`}
              alt=""
              layoutId={`gallery-${primaryGalleryId}`}
              className="absolute left-0 min-h-full w-full rounded-xl object-cover"
            />
          </AnimatePresence>
        </main>
        <aside className="z-1 ml-2">
          <AnimatePresence>
            {galleryIds.map((id) => (
              <ImageIndex id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </aside>
      </AnimateSharedLayout>
    </div>
  );
};

export default Gallery;
