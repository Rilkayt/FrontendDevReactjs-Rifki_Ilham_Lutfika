import PropTypes from "prop-types";
import DollarsRage from "./DollarsRage";
import StarRatings from "react-star-ratings";

function BoxList({ id, name, rating, cuisine, status, image, price_rage_end }) {
  const routeToDetail = () => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <div className="h-44 bg-slate-500 overflow-hidden">
            <img
              src={image}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="pt-2">
            <p className="text-justify text-sm md:text-lg">{name}</p>
            <StarRatings
              rating={rating}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#172554"
            />

            <div className="flex items-center justify-between font-light pt-2 pb-3">
              <p className="uppercase text-xs">
                {cuisine} - <DollarsRage price_rage_end={price_rage_end} />
              </p>
              <div className="flex space-x-2 items-center">
                <div
                  className={`w-2 h-2 rounded-full ${
                    status == "Closed" ? "bg-red-600" : "bg-green-500"
                  }`}
                ></div>
                <p className="text-xs uppercase">
                  {status == "Closed" ? "Closed" : "Open Now"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="uppercase w-full p-2 bg-blue-950 font-normal text-white mt-2"
          onClick={routeToDetail}
        >
          Learn More
        </button>
      </div>
    </>
  );
}

BoxList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string,
  price_rage_end: PropTypes.string.isRequired,
};

export default BoxList;
