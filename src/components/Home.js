import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://i.ibb.co/2Ycqmd9/photography.png"
          title="Photography"
          description="We have wide range of services in photography at affordable prices"
        />
        <Card
          src="https://i.ibb.co/gFLkZ4T/videography.png"
          title="Videography"
          description="We have the best rated videographers in you city."
        />
        <Card
          src="https://i.ibb.co/vjxnSch/social.png"
          title="Social Media"
          description="Photo or Video shoots for upcoming social media influencers"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.ibb.co/gPMKB4D/event.png"
          title="Event"
          description="Book our services for events like wedding, parties, festival, etc"
        />
        <Card
          src="https://i.ibb.co/FBm2MqH/product.png"
          title="Product Photoshoot"
          description="Photo or Video shoots of products for ecommerce or marketing purpose"
        />
        <Card
          src="https://i.ibb.co/4ZFRx1m/model.png"
          title="Model Photoshoot"
          description="Work with best photographers for you portfolio shoot."
        />
      </div>
    </div>
  );
};

export default Home;
