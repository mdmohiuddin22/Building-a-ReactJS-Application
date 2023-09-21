
import React, { useState, useEffect } from 'react';
import Block from './components/Block';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nextPosition, setNextPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isMoving) {
        const deltaX = nextPosition.x - position.x;
        const deltaY = nextPosition.y - position.y;

    
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      
        const step = 5;

        if (distance > step) {
         
          const newX = position.x + (deltaX / distance) * step;
          const newY = position.y + (deltaY / distance) * step;

          setPosition({ x: newX, y: newY });
        } else {
          // The block has reached the next position
          setPosition(nextPosition);
          setIsMoving(false);
        }
      }
    }, 1000 / 60); 

    return () => clearInterval(intervalId);
  }, [position, nextPosition, isMoving]);

  const moveBlock = (newDirection) => {
    const step = 100;

    switch (newDirection) {
      case 'up':
        setNextPosition({ x: position.x, y: position.y - step });
        break;
      case 'down':
        setNextPosition({ x: position.x, y: position.y + step });
        break;
      case 'left':
        setNextPosition({ x: position.x - step, y: position.y });
        break;
      case 'right':
        setNextPosition({ x: position.x + step, y: position.y });
        break;
      default:
        break;
    }

    setIsMoving(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="relative"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isMoving ? 'none' : 'transform 0.3s ease-in-out',
        }}
      >
        <Block direction={null} />
      </div>
      <div className="fixed top-0 left-0 flex flex-col justify-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => moveBlock('up')}
        >
          Up
        </button>
      </div>
      <div className="fixed bottom-0 left-0 flex flex-col justify-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => moveBlock('down')}
        >
          Down
        </button>
      </div>
      <div className="fixed top-0 right-0 flex flex-col justify-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => moveBlock('right')}
        >
          Right
        </button>
      </div>
      <div className="fixed bottom-0 right-0 flex flex-col justify-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => moveBlock('left')}
        >
          Left
        </button>
      </div>
    </div>
  );
}

export default App;








