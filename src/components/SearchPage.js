import { Button } from "@material-ui/core";
import React from "react";
import "../stylesheets/SearchPage.css";
import SearchResult from "./SearchResult";
import { Photographers } from "../utils/data";

const SearchPage = () => {
  let photographers = Photographers;
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p></p>
        <h1>Photographers nearby</h1>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rating</Button>
      </div>
      {photographers.map((photographer, index) => {
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
