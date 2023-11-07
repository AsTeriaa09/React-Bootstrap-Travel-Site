import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
     
       

      <>
        
        
        <Link to={props.path}>
            <div className="card mb-3">
              <div
               style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "30px",
              bottom: "72px",
              position: "absolute",
               }}
            >
            <span className="badge bg-danger">{props.label}</span>
          </div>
                <div className="card-body">
                  <div className="img-area">
                    <img
                      src={props.src}
                      alt="travel img"
                      class="card-img-top p-0 m-0"
                      style={{ width: "100%", height: "00px" }}
                    />
                  </div>
                  <p className="mt-3">
                    {props.text}
                  </p>
                </div>
            </div>
        </Link>
        
        
      </>
    
  )
}

export default CardItem
