import React from "react";
import dogs from "../data/dogs.json";
import { Link } from "react-router-dom";
const Dogs = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="Dogs">
      <h3>Dogs</h3>
      <div className="ctn-images">
        {dogs.map((dog) => (
          <Link className='dog-img' key={dog.id} to={`/dogs/${dog.breed}`}>
          <img
            src={dog.img}
            alt={dog.breed}
            />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
