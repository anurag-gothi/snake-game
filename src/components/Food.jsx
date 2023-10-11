import React from "react";
import cherryPng from '../assets/cherry.png'


const Food = ({ food, gridSize }) => {
  return (
    <img
      className="food"
      alt="food"
      src={cherryPng}
      style={{ left: food.x * gridSize, top: food.y * gridSize }}
    />
  );
};

export default Food;
