import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";

const Footer = () => {
  return (
    <div className="container ">
      <footer className="py-5">
        <div className="row  mx-md-5">
          <div className="foodap_footer col-lg-3 col-md-6 mb-3">
            <h5 className="foodap_main-head mb-4">Johny's BBQ</h5>
            <p className="foodap_main-para ">
              Save money and <br></br>enhance your event<br></br> with these
              special<br></br> offer for pizza
            </p>
          </div>

          <div className="foodap_footer col-lg-3 col-md-6 mb-3">
            <h5 className="foodap_main-head mb-4 mb-md-2">Feauture</h5>
            <ul className="nav d-flex flex-column ">
              <li className="nav-item mb-3  mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Menu
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Promo
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="foodap_footer col-lg-3 col-md-6 mb-3">
            <h5 className="foodap_main-head mb-4 mb-md-2">Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Landingpage
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Documentation
                </a>
              </li>
              <li className="nav-item mb-3 mb-md-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Referal Program
                </a>
              </li>
            </ul>
          </div>

          <div className="foodap_footer col-lg-3 col-md-6 mb-3">
            <ul className="list-unstyled d-flex ">
              <li>
                <a className="link-body-emphasis" href="#">
                  <img src={twitter}></img>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={linkedin}></img>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={insta}></img>
                </a>
              </li>
            </ul>
            <h5 className="foodap_main-head">Follow our social media</h5>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="foodap_copy-right">
            ©CopyRight <span>Johny's BBQ</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
