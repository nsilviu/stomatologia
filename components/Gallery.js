import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

function SideImages({ id, onExpand }) {
  return (
    <motion.img
      className="mb-1 rounded-md object-cover"
      src={`/gallery${id}.jpg`}
      alt=""
      onClick={() => onExpand(id)}
      layoutId={`gallery-${id}`}
    />
  );
}

const gallery = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
];

var galleryIndex = [];

for (var i = 1; i < gallery.length; i++) {
  galleryIndex.push(i);
  console.log(galleryIndex);
}

const Gallery = () => {
  const [galleryIds, setGalleryIds] = useState([2, 3, 4, 5, 6, 7]);
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
    <div
      id="gallery"
      className="flex h-[460px] scroll-mt-24 flex-col overflow-hidden"
    >
      <h1 className="my-4 inline-block text-center text-3xl font-bold text-slate-600">
        Galerie
      </h1>
      <div className="mx-4 flex flex-row">
        <AnimateSharedLayout type="crossfade">
          <div className="relative h-96 min-w-[70vw]">
            <AnimatePresence>
              <motion.img
                key={primaryGalleryId}
                src={`/gallery${primaryGalleryId}.jpg`}
                alt=""
                layoutId={`gallery-${primaryGalleryId}`}
                className="absolute left-0 min-h-full w-full rounded-xl object-cover shadow-md"
              />
            </AnimatePresence>
          </div>
          <div className="z-1 ml-1">
            <AnimatePresence>
              {galleryIds.map((id) => (
                <SideImages id={id} key={id} onExpand={setAsPrimary} />
              ))}
            </AnimatePresence>
          </div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default Gallery;
