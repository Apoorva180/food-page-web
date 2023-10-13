import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialDetail.css";
import image from "../../../src/assets/people.png";
import star from "../../../src/assets/5-star.png";

const TestimonialDetail = () => {
  return (
    <div
      id="testimonial"
      className="container d-flex justify-content-center align-items-center foodap_tst-wrapper"
    >
      <div className="col foodap_tst-content col-12 text-center p-4">
        <h4 className="foodap_tst-title mt-5 mb-3">TESTIMONIAL</h4>
        <h1 className="foodap_tst-heading">
          Making Food great again and again
        </h1>
        <p className="foodap_tst-para mt-4">
          You need not only just a food stall with a person but also specialized
          equipment, skills<br></br> to manage customers, effective product
          catalogs,very successful to make yours.
        </p>
        <div className="user my-4">
          <img className="img-fluid" src={image} alt="user"></img>
        </div>
        <p className="foodap_tst-para">
          You need not only just a food stall with a person but also specialized
          <br></br> equipment, skills to manage customers, effective product
          catalogs,<br></br> etc., very successful to make yours.
        </p>
        <div className="star mb-3">
          <img className="img-fluid" src={star} alt="star"></img>
        </div>
        <div className="foodap_name mb-5">
          <h3 className="foodap_tst-name">Vikranth Rathode</h3>
          <h4 className="foodap_tst-sub">UI&UX DESIGNER</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
