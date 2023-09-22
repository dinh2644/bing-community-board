import React from "react";
import {clubs} from "../helper/clubs"


const Card = () => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {clubs.map((club,index)=>(
        <div className="col" key={index}>
        <div className="card h-100">
          <img 
            src={club.image} 
            className="card-img-top"
            alt="Skyscrapers" 
            style={{ height: "200px"}}
            />
          <div className="card-body">
            <h5 className="card-title">{club.name}</h5>
            <p className="card-text">
              {club.description}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted"><a href={club.link}  target="_blank">Learn more</a></small>
          </div>
        </div>
      </div>
    ))}
  

  </div>
  </>
  );
};

export default Card;
