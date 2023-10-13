import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactDetail.css";

const ContactDetail = () => {
  return (
    <div
      id="contact"
      className="container-fluid d-flex justify-content-center align-items-center foodap_tst-block"
    >
      <div className="foodap_tst-top text-center ">
        <h4 className="foodap_tst-head mt-5 mb-4">CONTACT</h4>
        <h1 className="foodap_tst-bold mb-5">
          Food Stalls with person also Specialized equipment,<br></br>Skills to
          manage
        </h1>
        <div class="d-flex flex-column flex-sm-row mx-auto my-5 ">
          <input
            id="newsletter1"
            type="text"
            class="form-control"
            placeholder="Enter your message"
          />
          <button class="btn" type="button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
