import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

function BoxReview({ avatar, name, rating, message }) {
  return (
    <>
      <div className="mt-3 shadow-md p-5 rounded-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-500">
            <img
              src={avatar}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-blue-950 text-sm">{name}</h4>
            <div className="flex items-center space-x-1 space-y-0 ">
              <div className="flex items-center space-x-2 ">
                <StarRatings
                  rating={rating}
                  starDimension="15px"
                  starSpacing="2px"
                  starRatedColor="#172554"
                />
                {/* <ReactStars
                  count={5}
                  size={17}
                  value={rating}
                  edit={false}
                  activeColor="#172554"
                /> */}
                <p className="text-sm mt-1 font-bold text-blue-950">{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-justify text-sm pt-3">{message}</p>
      </div>
    </>
  );
}

BoxReview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default BoxReview;
