
// import './App.css'

// function App() {
  

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';

// function App() {
//   const [position, setPosition] = useState({ top: 50, left: 50 });

//   const moveUp = () => {
//     setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top - 10 }));
//   };

//   const moveDown = () => {
//     setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top + 10 }));
//   };

//   const moveLeft = () => {
//     setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left - 10 }));
//   };

//   const moveRight = () => {
//     setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left + 10 }));
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <div className="relative w-36 h-36 border border-blue-500 flex items-center justify-center">
//         <div
//           className="w-20 h-20 bg-blue-300 absolute"
//           style={{ top: `${position.top}px`, left: `${position.left}px` }}
//         ></div>
//       </div>
//       <div className="mt-4 flex justify-center">
//         <div className="flex flex-col">
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//             onClick={moveUp}
//           >
//             Move Up
//           </button>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
//             onClick={moveDown}
//           >
//             Move Down
//           </button>
//         </div>
//         <div className="flex flex-col items-center ml-4">
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//             onClick={moveLeft}
//           >
//             Move Left
//           </button>
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
//             onClick={moveRight}
//           >
//             Move Right
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// src/App.js
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

        // Calculate the distance between the current position and the next position
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Set the step size (adjust for desired speed)
        const step = 5;

        if (distance > step) {
          // Calculate the new position
          const newX = position.x + (deltaX / distance) * step;
          const newY = position.y + (deltaY / distance) * step;

          setPosition({ x: newX, y: newY });
        } else {
          // The block has reached the next position
          setPosition(nextPosition);
          setIsMoving(false);
        }
      }
    }, 1000 / 60); // Adjust the speed by changing the interval duration

    return () => clearInterval(intervalId);
  }, [position, nextPosition, isMoving]);

  const moveBlock = (newDirection) => {
    const step = 100; // Adjust the step size as needed

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








