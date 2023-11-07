import React from "react";
import { Link } from "react-router-dom"; import './Footer.css'

export default function Footer() {
  return (
    <div className="footer bg-dark text-white text-center">
      <div className="container">
        <div className="row pt-5 pb-2">
          <div className="col-lg-4 mb-5 mt-5">
            <h4 className="mb-4">About Us</h4>
            <div className="about-item my-2">
            <Link className="about-links my-3" to="/">Home</Link> <br />
            </div>
            <div className="about-item my-3">
            <Link className="about-links" to="/services">Services</Link>
            <br />
            </div>
           <div className="about-item my-3">
           <Link className="about-links" to="/products">Products</Link>
            <br />
           </div>
           <div className="about-item">
           <Link className="about-links" to="/sign-up">Sign Up</Link>
           </div>
          </div>
          <div className="col-lg-4 mt-5 news text-center">
            <h4 className="text-uppercase ">Newsteller Subscription</h4>
            <form className="text-center">
              <div class="mb-3">
                
                <div className="input-field text-center">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
                </div>
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                
                <div className="">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                />
                </div>
              </div>

              <button type="submit" class="btn mt-2 mb-5">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-lg-4 mt-5">
            <h4>Social links</h4>
            <div className="social-links">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-12 pb-2">
            <p class="website-rights">PLKV © 2020</p>
            </div>
        </div>
      </div>
    </div>
  );
}
