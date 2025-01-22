import BoxList from "../components/BoxList";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterData from "../components/FilterData";

function ListData() {
  const [data, setData] = useState([]);
  const [dataChanges, setDataChanges] = useState([]);
  const [perData, setPerData] = useState([]);
  const [index, setIndex] = useState(0);

  const [filterOpen, setFilterOpen] = useState(false);
  const [filterPrice, setFilterPrice] = useState("");
  const [filterCategories, setFilterCategories] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const getDataFilter = async (e) => {
    setFilterOpen(e.open);
    setFilterPrice(e.price);
    setFilterCategories(e.categories);
  };

  useEffect(() => {
    const getDataAll = async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_API_URL}/data`)
        .then((res) => {
          const allData = res.data.data.data;
          setData(allData);
          setDataChanges(allData);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    getDataAll();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      let filteredData = [...data];

      if (filterCategories !== "") {
        await axios
          .get(
            `${
              import.meta.env.VITE_API_URL
            }/data/categories/${filterCategories}`
          )
          .then((res) => {
            const allData = res.data.data;
            console.log(allData);
            console.log(filteredData);

            filteredData = allData;
          })
          .catch((e) => {
            console.log(e);
          });
      }

      if (filterPrice !== "") {
        if (Number(filterPrice) <= 50000) {
          filteredData = filteredData.filter(
            (d) => d.price_rage_end <= Number(filterPrice)
          );
        } else if (Number(filterPrice) === 150000) {
          filteredData = filteredData.filter(
            (d) =>
              d.price_rage_end > 50000 &&
              d.price_rage_end <= Number(filterPrice)
          );
        } else if (Number(filterPrice) === 300000) {
          filteredData = filteredData.filter(
            (d) =>
              d.price_rage_end > 150000 &&
              d.price_rage_end <= Number(filterPrice)
          );
        } else if (Number(filterPrice) === 1000000) {
          filteredData = filteredData.filter(
            (d) =>
              d.price_rage_end > 300000 &&
              d.price_rage_end <= Number(filterPrice)
          );
        } else {
          filteredData = filteredData.filter(
            (d) => d.price_rage_end >= Number(filterPrice)
          );
        }
      }

      if (filterOpen) {
        filteredData = filteredData.filter((d) => d.status == "Open");
      }

      setDataChanges(filteredData);
    };

    updateData();
  }, [filterOpen, filterPrice, filterCategories]);

  useEffect(() => {
    setPerData(dataChanges.slice(0, 8));
    setIndex(8);
  }, [dataChanges]);

  const loadMore = () => {
    const indexNext = index + 8;
    setPerData((prevData) => [
      ...prevData,
      ...dataChanges.slice(index, indexNext),
    ]);
    setIndex(indexNext);
  };

  return (
    <>
      <h1 className="font-normal text-black text-2xl md:text-4xl lg:text-6xl md:px-10 md:pt-10 opacity-65">
        Restaurants
      </h1>
      <p className="text-sm pt-2 md:px-10 sm:w-full md:max-w-[80%] lg:text-lg text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum
        adipisci soluta obcaecati vitae, voluptatum repudiandae quisquam
      </p>

      <hr className="mt-5" />
      <FilterData filterDataValue={getDataFilter} key={data} />
      <hr />

      <h2 className="font-normal text-black text-2xl md:text-xl lg:text-3xl md:px-10 pt-7 md:pt-10">
        All Restaurants{" "}
        <span className="text-sm">{filterOpen ? "/ Open_Now" : ""}</span>
        <span className="text-sm">
          {filterPrice !== "" ? `/ filter_Price` : ""}
        </span>
        <span className="text-sm">
          {filterCategories !== "" ? `/ ${filterCategories}` : ""}
        </span>
      </h2>
      <section
        className={
          dataChanges.length > 0
            ? `pt-5 md:px-10 grid md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 gap-y-5`
            : "w-full"
        }
      >
        {dataChanges.length < 1 && !isLoading ? (
          <>
            <p className="text-center pt-3">Data Is Empty</p>
          </>
        ) : (
          ""
        )}
        {!isLoading ? (
          perData.map((res) => (
            <BoxList
              id={res.id}
              name={res.name}
              image={res.image[0]}
              cuisine={res.cuisine[0]}
              rating={res.rating}
              status={res.status}
              price_rage_end={res.price_rage_end}
              key={res.id}
            />
          ))
        ) : (
          <p className="text-center md:text-xl py-10">Loading...</p>
        )}
      </section>

      <div className="flex justify-center mt-5">
        <button
          className={
            perData.length === dataChanges.length
              ? `hidden`
              : `w-[50%] uppercase border-blue-950 border-opacity-45 border-2 text-sm p-2 hover:bg-blue-950 hover:opacity-90 hover:text-white md:mx-10 duration-200 tracking-wider`
          }
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default ListData;
