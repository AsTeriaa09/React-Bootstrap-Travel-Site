import React from "react";
import './Carousel.css'
import '../App.css'
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          {/* <video src='/videos/video-1.mp4' autoPlay loop muted className=" w-100 h-100"/> */}
          <img src="images/travel-2.jpg" alt="" className="d-block w-100" />
            <div className="carousel-caption">
              <h1>ADVENTURE AWAITS</h1>
              <p className="my-3">
                what are you waiting for?
              </p>
              <Link to='/sign-up'> <button className="low-btn mt-2">Sign Up</button></Link>
            </div>
          </div>
          <div className="carousel-item">
          {/* <video src='/videos/video-2.mp4' autoPlay loop muted className=" w-100"/> */}
          <img src="images/travel-4.jpg" alt="" className="d-block w-100"/>
            <div className="carousel-caption">
              <h1>YOUR TRAVEL GUIDE</h1>
              <p className="my-3">
                Sign in now to get exclusive offers and deals!
              </p>
             <Link to='/sign-up'> <button className="low-btn mt-2">Sign Up</button></Link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
