import React, { useState } from "react";
import "./FeauturesDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/home.png";
import Image2 from "../../assets/bike.png";
import Image3 from "../../assets/smile.png";
import FeauturesCard from "../FeauturesCard//FeauturesCard";

function FeauturesDetail() {
  const productData = [
    {
      imageSrc: Image1,
      header: "Quality Food",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer",
    },
    {
      imageSrc: Image2,
      header: "Food Delivery",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer",
    },
    {
      imageSrc: Image3,
      header: "Super Taste",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer",
    },
  ];
  return (
    <div id="feautures" className="container foodap_feautures">
      <div className="foodap_tst-top text-center ">
        <h4 className="foodap_tst-head mt-5 mb-4">FEAUTURES</h4>
        <h1 className="foodap_tst-bold mb-5">Food With A New Passion</h1>
      </div>
      <div className="card-container row flex-lg-row flex-column flex-md-column align-items-center">
        {productData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <FeauturesCard
              imageSrc={card.imageSrc}
              header={card.header}
              content={card.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeauturesDetail;
