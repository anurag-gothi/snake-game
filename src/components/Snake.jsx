import React from "react";
import styled from "styled-components";

const SnakeSegment = styled.div`
  position: absolute;
  width: 11px;
  height: 7px;
  background-color: green;
  border-radius: ${(props) => {
    if(props.index === 0){
      return '50% 50% 50% 50%;'
    }
    return '20% 50%;'
  }}
  animation: ${(props) => {
    if(props.index === 0){
      return 'mover 1s infinite;'
    }
    return '"";'
  }}
  
`;

const Snake = ({ snake, gridSize }) => {
  return (
    <>
      {snake.map((segment, index) => (
        <SnakeSegment
          key={index}
          style={{ left: segment.x * gridSize, top: segment.y * gridSize }}
          gridSize={gridSize}
          index={index}
        />
      ))}
    </>
  );
};

export default Snake;
