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
    <div className=" m-1">
      <Image
        src={image.thumbnail}
        alt={image.alt}
        className=""
        loading="lazy"
        objectFit="cover"
        onClick={handleOpenModal}
        width={300}
        height={300}
      />
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
    })
  ).isRequired,
};

export default GalleryItem;
