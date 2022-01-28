import React from "react";
import dogs from "../data/dogs.json";
import { Link, Outlet } from "react-router-dom";
const Dogs = () => {

  return (
    <div className="content">
      <h3>Dogs</h3>
      <div className="ctn-images">
        {dogs.map((dog) => (
          <Link className='content-img' key={dog.id} to={`/dogs/${dog.breed}`}>
          <img
            src={dog.img}
            alt={dog.breed}
            />
            </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Dogs;
