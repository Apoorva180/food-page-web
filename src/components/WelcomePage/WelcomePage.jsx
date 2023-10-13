import React from "react";
import "./WelcomePage.scss";
import food from "../../assets/food.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const WelcomePage = () => {
  return (
    <div id="home" className="container-fluid foodap_main-container d-flex align-items-center "> 
    <div className="container">     
    <div className="row">
      <div className="col-md-6 foodap_left-container">      
          <h2 className="my-lg-4 my-md-3 my-sm-2">Welcome to <span>JOHNNY BBQ</span></h2>
          <h1 className="my-lg-4 my-md-3 my-sm-2">Where <span>Flavor</span> and<br></br> passion meets</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nulla iusto minima sit excepturi eveniet itaque dolore aspernatur eum commodi. Ipsam ad fugit impedit animi, itaque alias rem nemo laborum.itaque dolore aspernatur eum commodi. Ipsam ad fugit impedit animi, itaque alias rem nemo laborum</p>
          <div className="foodap_buttons-container my-5 ">
            <button className='button'>Order Food</button>     
          </div>
          <div className="foodap_info col-12 my-5">
            <div className="row">
                <div className="foodap_det d-flex flex-column col-lg-2 col-md-4 ">
                    <p>5.000+</p>
                    <p>Customers</p>
                </div>
                <div className="foodap_det d-flex flex-column col-lg-2 col-md-4 ">
                    <p>8.000+</p>
                    <p>Delivery</p>
                </div>
                <div className="foodap_det d-flex flex-column col-lg-2 col-md-4">
                    <p>1.000+</p>
                    <p>Ratings</p>
                </div>
           
          </div>
        </div>
      </div>   
    <div className="col-md-6 right-container d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={food}></img>
    </div>
    </div>
    </div>
    </div>

  );
};

export default WelcomePage;
