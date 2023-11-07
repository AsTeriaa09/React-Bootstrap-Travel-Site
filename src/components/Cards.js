import React from "react";
// import CardItem from "./CardItem";
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards() {
  return (
    

    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center pb-5 text-capitalize">
                <h1>check out these epic destinations</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <Link to='/destinations' className='link'>
                <div className="card mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      right: "16px",
                      top: "15px",
                      position: "absolute",
                    }}
                  >
                    <span className="badge bg-danger">Adventure</span>
                  </div>
                  <div className="card-body">
                    <div className="img-area">
                      <img
                        src='images/img-9.jpg'
                        alt="travel img"
                        className="card-img-top p-0 m-0"
                        style={{ width: "100%", height: "300px" }}
                      />
                    </div>
                    <p className="mt-3">Explore the hidden waterfall deep inside the Amazon Jungle</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <Link to='/destinations' className='link'>
                <div className="card mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      right: "16px",
                      top: "15px",
                      position: "absolute",
                    }}
                  >
                    <span className="badge bg-danger">Thriller</span>
                  </div>
                  <div className="card-body">
                    <div className="img-area">
                      <img
                        src='images/img-2.jpg'
                        alt="travel img"
                        className="card-img-top p-0 m-0"
                        style={{ width: "100%", height: "300px" }}
                      />
                    </div>
                    <p className="mt-3">Explore the hidden waterfall deep inside the Amazon Jungle</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Link to='/destinations' className='link'>
                <div className="card mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      right: "16px",
                      top: "15px",
                      position: "absolute",
                    }}
                  >
                    <span className="badge bg-danger ">Exciteing</span>
                  </div>
                  <div className="card-body">
                    <div className="img-area">
                      <img
                        src='images/img-3.jpg'
                        alt="travel img"
                        className="card-img-top p-0 m-0"
                        style={{ width: "100%", height: "250px" }}
                      />
                    </div>
                    <p className="mt-3">Set Sail in the Atlantic Ocean visiting Uncharted Waters</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <Link to='/destinations' className='link'>
                <div className="card mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      right: "16px",
                      top: "15px",
                      position: "absolute",
                    }}
                  >
                    <span className="badge bg-danger">Mystery</span>
                  </div>
                  <div className="card-body">
                    <div className="img-area">
                      <img
                        src='images/img-5.jpg'
                        alt="travel img"
                        className="card-img-top p-0 m-0"
                        style={{ width: "100%", height: "250px" }}
                      />
                    </div>
                    <p className="mt-3">Experience Football on Top of the Himilayan Mountains</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link to='/destinations' className='link'>
                <div className="card mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      right: "16px",
                      top: "15px",
                      position: "absolute",
                     
                    }}
                  >
                    <span className="badge bg-danger">Adrenaline</span>
                  </div>
                  <div className="card-body">
                    <div className="img-area">
                      <img
                        src='images/img-8.jpg'
                        alt="travel img"
                        className="card-img-top p-0 m-0"
                        style={{ width: "100%", height: "250px" }}
                      />
                    </div>
                    <p className="mt-3">Ride through the Sahara Desert on a guided camel tour</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
