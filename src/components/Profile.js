import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../stylesheets/Profile.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Profile = () => {
  const location = useLocation();

  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [location_, setLocation_] = useState();
  const [description, setDescription] = useState();
  const [star, setStar] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setImg(location.state.image);
    setTitle(location.state.title);
    setLocation_(location.state.location);
    setDescription(location.state.description);
    setStar(location.state.star);
    setPrice(location.state.price);
  }, [location]);
  return (
    <div className="mainContainer">
      <div className="profileContainer">
        <img src={img} alt="" className="profilePhoto" />
        <div className="profileCard">
          <div className="profileInfo">
            <h2>{title}</h2>
            <h4>Services Offerred: {description}</h4>
            <h4>Locations: {location_}</h4>
            <h4>Rating: {star}</h4>
            <h4>Price: ₹{price}/day</h4>
            <Button
              className="getInTouchBTN"
              variant="contained"
              color="secondary"
              onClick={() =>
                alert(
                  "An email has been sent to the photographer, he/she will contact you soon."
                )
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="gallerContainer">
        <hr />
        <h2 className="myWork">My Work:</h2>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Profile;
