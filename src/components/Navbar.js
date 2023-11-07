import React, { useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

    const[click,setClick]=useState(false);

    const handleClick = ()=> setClick(!click)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid my-2">
          <Link className="navbar-brand" to='/'>
            PLKV <i className="fa-brands fa-pied-piper"></i>
          </Link>
          <div
            className="navbar-toggler text-white me-5"
            onClick={handleClick}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          {/* className="navbar-toggler-icon" */}
            <span> <i className={
                click ? "fa-solid fa-circle-xmark" : "fa-solid fa-bars"
              }></i></span>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto my-3 my-lg-0 text-center me-5">
              <li className="nav-item mx-lg-3 my-3 my-lg-0 mt-lg-1">
                <Link className="nav-link text-white" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-lg-3 my-3 my-lg-0 mt-lg-1">
                <Link className="nav-link text-white" to='/services'>
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-lg-3 my-3 my-lg-0 mt-lg-1">
                <Link className="nav-link text-white" to='/services'>
                  Services
                </Link>
              </li>
              <li className="nav-item mx-lg-3 my-3 my-lg-0 ">
                <Link className="nav-link-btn" to='/sign-up'>
                  <button className=" px-4 px-lg-3">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
