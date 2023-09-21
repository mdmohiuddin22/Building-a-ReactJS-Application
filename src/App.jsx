
// import './App.css'

// function App() {
  

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const moveUp = () => {
    setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top - 10 }));
  };

  const moveDown = () => {
    setPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top + 10 }));
  };

  const moveLeft = () => {
    setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left - 10 }));
  };

  const moveRight = () => {
    setPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left + 10 }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-36 h-36 border border-blue-500 flex items-center justify-center">
        <div
          className="w-20 h-20 bg-blue-300 absolute"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        ></div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={moveUp}
          >
            Move Up
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
            onClick={moveDown}
          >
            Move Down
          </button>
        </div>
        <div className="flex flex-col items-center ml-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={moveLeft}
          >
            Move Left
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
            onClick={moveRight}
          >
            Move Right
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





