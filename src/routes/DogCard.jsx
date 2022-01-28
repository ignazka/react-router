import React from "react";
import { useParams } from "react-router-dom";
import data from '../data/dogs.json'
const DogCard = () => {


    let params = useParams();
    const [dog] = data.filter(dog => dog.breed === params.dogId)
    console.log(dog.name)
  return <div className="DogCard">
      <h2>{dog.name}</h2>
      <p>{dog.breed}</p>
      
  </div>;
};

export default DogCard;
