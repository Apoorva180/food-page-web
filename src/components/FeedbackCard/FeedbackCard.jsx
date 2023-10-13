import React from "react";
import "./FeedbackCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
const FeedbackCard = ({
  imageSrc,
  header,
  content,
  dollar,
  plusbtn,
  stars,
}) => (
  <div className="container foodap_tst-card  ">
    <div className="foodap_tst d-flex flex-column">
      <img
        className="foodap_tst-images align-self-center my-4"
        src={imageSrc}
        alt="Card Image"
      />

      <h3 className="foodap_tst-header mx-3  mb-3">{header}</h3>
      <div className="d-flex justify-content-between mx-3 mb-3">
        <p className="foodap_tst-contents ">{content}</p>
        <p className="foodap_tst-dollar ">{dollar}</p>
      </div>
      <div className="d-flex justify-content-between mx-3 mb-4">
        <img src={plusbtn}></img>
        <img src={stars}></img>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
