import React from "react";
import "./FeauturesCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
const FeauturesCard = ({ imageSrc, header, content }) => (
  <div className="container foodap_tst-cards  ">
    <div className="foodap_tsts text-center">
      <img className="foodap_tst-image mb-4" src={imageSrc} alt="Card Image" />
      <h3 className="foodap_tst-headers mb-3">{header}</h3>
      <p className="foodap_tst-content mx-3 mb-4">{content}</p>
    </div>
  </div>
);

export default FeauturesCard;
