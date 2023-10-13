import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import search from "../../assets/icn search .icn-xs.png";
import cart from "../../assets/icn shopping-cart .icn-xs.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md  " aria-label="Fourth navbar example">
      <div class="container navigation my-3">
        <a class="navbar-brand" href="#">
          Jonny's BBQ
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExample04">
          <ul class="navbar-nav mx-auto  mb-md-0 d-flex justify-content-center align-items-center ">
            <li class="nav-item mx-4  mx-md-1">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li class="nav-item mx-lg-4 mx-md-1">
              <a class="nav-link active" aria-current="page" href="#feautures">
                About Us
              </a>
            </li>

            <li class="nav-item mx-lg-4 mx-md-1">
              <a class="nav-link active" aria-current="page" href="#menu">
                Menu
              </a>
            </li>

            <li class="nav-item mx-lg-4 mx-md-1">
              <a class="nav-link active" aria-current="page" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li class="nav-item mx-lg-4 mx-md-1">
              <a class="nav-link active" aria-current="page" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          <ul class="navbar-nav   d-flex justify-content-center align-items-center ">
            <li class="nav-item mx-2 mx-md-0">
              <a class="nav-link active" aria-current="page" href="#">
                <img src={search}></img>
              </a>
            </li>
            <li class="nav-item mx-2 mx-md-0">
              <a class="nav-link active" aria-current="page" href="#">
                <img src={cart}></img>
              </a>
            </li>
            <button type="button" className="button-control login-btn mx-4">
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
