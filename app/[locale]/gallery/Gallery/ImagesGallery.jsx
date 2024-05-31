import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

const ImagesGallery = ({ images }) => {
  return (
    <div className=" flex md:flex-row flex-wrap justify-center items-center md:w-2/3 ">
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          image={image}
          index={index}
          total={images.length}
          images={images}
        />
      ))}
    </div>
  );
};

ImagesGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImagesGallery;
