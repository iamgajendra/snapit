import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../stylesheets/SearchPage.css";
import SearchResult from "./SearchResult";
import getData from "../utils/fetchData";

const SearchPage = () => {
  const photographers = getData();
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("star");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        price: "price",
        star: "star",
      };
      const sortProperty = types[type];
      const sorted = [...photographers].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p></p>
        <h1>Photographers nearby</h1>
        <Button variant="outlined" onClick={() => setSortType("price")}>
          Price
        </Button>
        <Button variant="outlined" onClick={() => setSortType("star")}>
          Rating
        </Button>
      </div>
      {data.map((photographer, index) => {
        return (
          <SearchResult
            key={index}
            img={photographer.img}
            location={photographer.location}
            title={photographer.title}
            description={photographer.description}
            star={photographer.star}
            price={photographer.price}
            total={photographer.total}
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
