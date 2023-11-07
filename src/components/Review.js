import React from "react";
import './Review.css'

export default function Review() {
  return (
    <div>
      <div className="container">
        <div className="text-center pb-5">
          <h1>Reviews</h1>
        </div>
        <div className="row text-center bg-light py-3 mt-3 mb-5">
          <div className="col-lg-4 mb-3">
            <i class="fa-solid fa-user mb-4 mt-2"></i>
            <figure>
              <blockquote class="blockquote">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus alias aspernatur praesentium.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Miss danie <cite title="Source Title">daily news</cite>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 mb-3">
            <i class="fa-solid fa-user  mb-4 mt-2"></i>
            <figure>
              <blockquote class="blockquote">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, facilis.consectetur adipisicing elit</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Suzy lee <cite title="Source Title">tour guide</cite>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 mb-3">
            <i class="fa-solid fa-user  mb-4 mt-2"></i>
            <figure>
              <blockquote class="blockquote">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, delectus ab elit. Esse.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                antonie van <cite title="Source Title">clickography</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
