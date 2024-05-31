import { useState } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Modal = ({ onClose, images, currentIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur z-50 truncate">
      <div className="flex justify-center items-center w-screen relative ">
        <span
          className="absolute left-8 top-8 cursor-pointer text-white text-6xl z-20"
          onClick={onClose}
        >
          &times;
        </span>
        <LazyLoadImage
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          placeholderSrc={images[currentImageIndex].thumbnail}
          className="h-[100vh] "
        />
        <button
          className="absolute top-[50%] left-[10vw] bg-transparent text-7xl text-white z-50"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <button
          className="absolute top-[50%] right-[10vw] bg-transparent text-7xl text-white z-50"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Modal;
