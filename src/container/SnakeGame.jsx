import React, { useState, useEffect } from 'react';
import Snake from '../components/Snake';
import Food from '../components/Food';
import Keypad from '../components/Keypad';
import constants from '../utils/constants';
import snakeIcon from '../assets/snake.png';

const SnakeGame = () => {
  const { gridSize, defaultSpeed, onLevelUp } = constants;
  const generateFoodPosition = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  };

  const [snake, setSnake] = useState([
    { x: 5, y: 5 },
    { x: 4, y: 5 },
  ]);
  const [food, setFood] = useState(generateFoodPosition());
  const [direction, setDirection] = useState('RIGHT');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameType, setGameType] = useState('slug');
  const [started, setStarted] = useState(false);
  const [speed, setSpeed] = useState(defaultSpeed);
  const [isPaused, setIsPaused] = useState(false);

  const checkCollision = () => {
    const head = snake[0];

    // Check if the snake collides with the wall while crawling
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      alert('Game over!');
      resetGame();
      return;
    }

    // Check if the snake eats itself
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        alert('Game over!');
        resetGame();
        return;
      }
    }

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
      setFood(generateFoodPosition());
      setScore(score + 1);

      // Add a new segment to the snake
      const newSnake = [...snake];
      const tail = { ...newSnake[newSnake.length - 1] };
      newSnake.push(tail);
      setSnake(newSnake);
    }
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);
    newSnake.pop();
    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake([
      { x: 5, y: 5 },
      { x: 4, y: 5 },
    ]);
    setFood(generateFoodPosition());
    setDirection('RIGHT');
    setScore(0);
    setLevel(1);
    setSpeed(defaultSpeed);
    setIsPaused(false); // Reset pause state
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [direction]);

  useEffect(() => {
    if (score % 5 === 0 && score > 0) {
      setSpeed((prevSpeed) => {
        return prevSpeed - onLevelUp;
      });
      setLevel((prevLevel) => {
        return prevLevel + 1;
      });
    }
  }, [score]);

  useEffect(() => {
    const handleGameTick = () => {
      if (!isPaused && started) {
        moveSnake();
        checkCollision();
      }
    };

    const gameInterval = setInterval(handleGameTick, speed);

    return () => {
      clearInterval(gameInterval);
    };
  }, [snake, speed, isPaused, started]);
  // snake, speed, isPaused
  const togglePause = () => {
    if (!started) {
      setStarted(true);
      return;
    }
    setIsPaused(!isPaused);
  };

  const onStart = () => {
    setStarted(true);
  };

  return (
    <div>
      {/* <button onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button> */}
      <div class="mobile">
        <div class="phone">
          <div class="phone-mirror">
            <div class="screen">
              <div class="line-rec"></div>
              <p class="text-center white-text">NOKIA</p>
              <div class="flex-screen">
                {started ? (
                  <div className="game-view">
                    <div className="game-header">
                      <span className="score">{score}</span>
                      <span className="level">Level: {level}</span>
                    </div>
                    <div className="game-container">
                      <Snake snake={snake} gridSize={gridSize} />
                      <Food food={food} gridSize={gridSize} />
                    </div>
                  </div>
                ) : (
                  <div className="home-page">
                    <img src={snakeIcon} className="snake-icon" />
                    <div className="buttons">
                      <button className="play-button" onClick={onStart}>
                        [PLAY]
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Keypad
              togglePause={togglePause}
              isPaused={isPaused}
              started={started}
            />
            <div class="last-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
