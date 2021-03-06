import React from "react";
import "../stylesheets/SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const history = useHistory();
  function goToProfile() {
    history.push({
      pathname: "/profile",
      state: {
        image: img,
        location: location,
        title: title,
        description: description,
        star: star,
        price: price,
        total: total,
      },
    });
  }
  return (
    <div className="searchResult" onClick={() => goToProfile()}>
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>{star}</p>
          </div>
          <div className="searchResult__price">
            <h2>₹{price}/day</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
