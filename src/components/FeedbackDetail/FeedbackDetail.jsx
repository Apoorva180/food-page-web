import React, { useState } from "react";
import "./FeedbackDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import picture1 from "../../assets/image-1.png";
import picture2 from "../../assets/image2.png";
import picture3 from "../../assets/image3.png";
import plus from "../../assets/plus.png";
import star from "../../assets/4-star.png";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

function FeedbackDetail() {
  const feedData = [
    {
      imageSrc: picture1,
      header: "Grillcatering",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer,part to earn good money",
      dollar: "5$",
      plusbtn: plus,
      stars: star,
    },
    {
      imageSrc: picture2,
      header: "Grilling",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer,part to earn good money",
      dollar: "5$",
      plusbtn: plus,
      stars: star,
    },
    {
      imageSrc: picture3,
      header: "Pizza Catering",
      content:"It can be very secure part to earn good money and make you very successive creative entreprenuer,part to earn good money",
      dollar: "5$",
      plusbtn: plus,
      stars: star,
    },
  ];
  return (
    <div id="feedback" className="container mt-5">
      <div className="card-container row flex-lg-row flex-column flex-md-column align-items-center justify-content-between">
        {feedData.map((card, index) => (
          <div className=" col-lg-3 mx-3 col-md-6 col-sm-12 mb-4" key={index}>
            <FeedbackCard
              imageSrc={card.imageSrc}
              header={card.header}
              content={card.content}
              dollar={card.dollar}
              plusbtn={card.plusbtn}
              stars={card.stars}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackDetail;
