import React from "react";
import './Services.css'

function Services() {
  return (
    <>
      <div className="container services-main ">
     
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <h1 className="text-center my-5">Our Services</h1>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Experienced Travel Guide 
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel error soluta doloremque temporibus ex, reprehenderit eius inventore blanditiis suscipit recusandae enim dolorum cum quisquam nesciunt quam consectetur facilis aliquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel error soluta doloremque temporibus ex, reprehenderit eius inventore blanditiis suscipit recusandae enim dolorum cum quisquam nesciunt quam consectetur facilis aliquam.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Low Expences
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias ab quos odio aliquam soluta, nulla sequi asperiores dignissimos blanditiis voluptatibus odit quidem necessitatibus sint! Laudantium vero earum, porro voluptate optio voluptates a, quos vitae consequuntur et ullam doloremque ex incidunt reprehenderit eum ea. Earum, tempore aspernatur, accusamus voluptas aperiam explicabo ex asperiores quos similique possimus ipsam vel, quisquam blanditiis!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Fast Response
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptate laborum eligendi ullam eaque reiciendis reprehenderit quos repudiandae aperiam ea! Minima porro delectus illum veritatis quas architecto iure quos tempora assumenda animi magnam iusto, officia placeat nesciunt doloribus ullam! Error officiis ut nihil aliquid suscipit.
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Services;
