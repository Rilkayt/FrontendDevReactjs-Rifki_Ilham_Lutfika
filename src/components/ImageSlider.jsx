import PropTypes from "prop-types";
import { useState } from "react";

function ImageSlider({ image = [] }) {
  const [indexImage, setIndexImage] = useState(0);

  const prevSlide = () => {
    setIndexImage((indexImage - 1 + image.length) % image.length);
  };

  const nextSlide = () => {
    setIndexImage((indexImage + 1) % image.length);
  };

  return (
    <>
      <div className="w-full relative h-full ">
        {image.length < 1 ? (
          <>
            <p className=" font-semibold flex items-center justify-center h-full w-full">
              Image Is Empty
            </p>
          </>
        ) : (
          image.map((image, index) => (
            <img
              key={index}
              src={image}
              loading="lazy"
              className={`w-full h-full transform scale-125 object-cover object-center ${
                index != indexImage ? `hidden` : ""
              }`}
            />
          ))
        )}
        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-opacity-90 text-black rounded-full h-10 w-10  duration-200 bg-opacity-45 ${
            image.length < 2 ? "hidden" : ""
          }`}
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-opacity-90 text-black rounded-full h-10 w-10 duration-200 bg-opacity-45 ${
            image.length < 2 ? "hidden" : ""
          }`}
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
    </>
  );
}

ImageSlider.propTypes = {
  image: PropTypes.array.isRequired,
};

export default ImageSlider;
