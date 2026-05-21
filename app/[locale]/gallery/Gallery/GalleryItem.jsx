import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import Image from "next/image";

const GalleryItem = ({ image, index, images }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);

    document.body.classList.add("overflow-y-hidden");
  };

  const handleCloseModal = () => {
    setModalOpen(false);

    document.body.classList.remove("overflow-y-hidden");
  };

  return (
    <div className="m-1">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)] p-2">
        <Image
          src={image.thumbnail}
          alt={image.alt}
          loading="lazy"
          objectFit="cover"
          onClick={handleOpenModal}
          width={300}
          height={300}
          className="h-full w-full object-cover aspect-[1/1] transition-transform duration-500 hover:scale-[1.03] rounded-3xl"
        />
      </div>
      {modalOpen && (
        <Modal
          image={image}
          onClose={handleCloseModal}
          images={images}
          currentIndex={index}
        />
      )}
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GalleryItem;
