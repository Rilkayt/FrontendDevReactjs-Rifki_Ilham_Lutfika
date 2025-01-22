import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const listPriceRage = [
  { label: "Price", value: "" },
  { label: "<= 50K", value: "50000" },
  { label: "51k - 150k", value: "150000" },
  { label: "151k - 300k", value: "300000" },
  { label: "301k - 1000k", value: "1000000" },
  { label: "> 1000k", value: "1000001" },
];

const listCategories = [
  { label: "Categories", value: "" },
  { label: "Japan", value: "Japan" },
  { label: "Mexico", value: "Mexico" },
  { label: "America", value: "America" },
  { label: "China", value: "China" },
  { label: "Indonesia", value: "Indonesia" },
];

function FilterData({ filterDataValue }) {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");

  useEffect(() => {
    filterDataValue({ open, price, categories });
  }, [open, price, categories, filterDataValue]);

  const resetFilter = () => {
    setOpen(false);
    setPrice("");
    setCategories("");
  };

  return (
    <>
      <div className="flex justify-between items-center py-3 md:px-10">
        <div className="flex sp space-x-1 md:space-x-10 items-center">
          <h3 className="hidden md:block text-xs md:text-sm">Filter By :</h3>
          <div className="flex space-x-1 md:space-x-3 items-center ">
            <input
              type="radio"
              id="openNow"
              value={open}
              checked={open}
              onChange={() => {
                setOpen(true);
              }}
            />
            <p className="text-xs md:text-sm">Open Now</p>
          </div>

          <select
            id="priceRage"
            className="text-xs md:text-sm border-b-2 border-blue-950 py-1"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          >
            {listPriceRage.map((res, index) => (
              <>
                <option key={index} value={res.value}>
                  {res.label}
                </option>
              </>
            ))}
          </select>

          <select
            id="categories"
            className="text-xs md:text-sm border-b-2 border-blue-950 py-1"
            onChange={(e) => setCategories(e.target.value)}
            value={categories}
          >
            {listCategories.map((res, index) => (
              <>
                <option key={index} value={res.value}>
                  {res.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <button
          className="uppercas border-2 opacity-55 px-6 py-2 rounded-md text-xs md:text-sm"
          onClick={resetFilter}
        >
          Clear All
        </button>
      </div>
    </>
  );
}

FilterData.propTypes = {
  filterDataValue: PropTypes.func.isRequired,
};

export default FilterData;
