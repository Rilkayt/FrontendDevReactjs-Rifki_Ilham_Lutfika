import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DollarsRage from "../components/DollarsRage";
import BoxReview from "../components/BoxReview";
import Maps from "../components/Maps";
import ImageSlider from "../components/ImageSlider";
import StarRatings from "react-star-ratings";

function DetailData() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [dataReview, setDataReview] = useState([]);
  const [dataMap, setDataMap] = useState({ latitude: "0", longtitude: "0" });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDataAll = async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_API_URL}/data/${id}`)
        .then((res) => {
          const allData = res.data.data;
          setData(allData);
          setDataReview(allData.review);
          setDataMap(allData.map);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    getDataAll();
  }, [id]);

  return (
    <>
      {!isLoading ? (
        <div className="md:px-10">
          <h3 className="text-xs pb-3 md:pb-5">Detail / Restaurant / {id}</h3>
          <div className="md:flex md:space-x-10 w-full">
            <div className="md:w-1/2 md:px-10 h-40 md:h-52 lg:h-72 bg-gray-400 rounded-lg overflow-hidden">
              <ImageSlider image={data.image} />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-justify text-lg pt-2 md:text-xl lg:text-3xl font-semibold">
                {data.name}
              </h2>

              <p className="text-xs  uppercase pt-2 lg:text-sm">
                Open :{" "}
                <span className="font-semibold">
                  {data.schedule_start} - {data.schedule_end} WIB
                </span>
              </p>
              <p className="text-xs md:text-sm lg:text-lg text-blue-950 font-semibold pt-1 md:pt-2">
                <DollarsRage price_rage_end={data.price_rage_end} /> IDR{" "}
                {data.price_rage_start} ~ {data.price_rage_end}
              </p>
              <div className="flex items-center space-x-2">
                <StarRatings
                  rating={data.rating}
                  starDimension="20px"
                  starSpacing="2px"
                  starRatedColor="#172554"
                />
                <p className="text-sm md:text-sm font-semibold text-blue-950">
                  {data.rating}
                </p>
              </div>
              <p className="text-xs font-semibold uppercase lg:text-sm pt-3">
                Cuisine : <span>{data?.cuisine?.join(", ")}</span>
              </p>
              <div className="flex space-x-2 items-center pt-2">
                <p className="text-xs font-semibold uppercase lg:text-sm">
                  Status :
                </p>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                      data.status == "Closed" ? "bg-red-600" : "bg-green-500"
                    }`}
                  ></div>
                  <p className="text-xs font-semibold uppercase lg:text-sm">
                    {data.status == "Closed" ? "Closed" : "Open Now"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 md:flex md:space-x-10">
            <div className="md:w-1/2">
              <h3 className="uppercase text-blue-950 font-bold text-sm tracking-wide">
                Location
              </h3>
              <div className="w-full h-[300px] bg-gray-600 mt-2 rounded-md relative overflow-hidden">
                <Maps
                  latitude={Number(dataMap.latitude)}
                  longitude={Number(dataMap.longtitude)}
                />
              </div>
            </div>
            <div className="md:w-1/2 pt-10 md:pt-0">
              <h3 className="uppercase text-blue-950 font-bold text-sm tracking-wide">
                reviews
              </h3>
              {dataReview.map((res) => (
                <BoxReview
                  key={res.name}
                  avatar={res.avatar}
                  name={res.name}
                  rating={res.rating}
                  message={res.message}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </>
  );
}

export default DetailData;
