import React, { useState, useEffect } from 'react';

const Random = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  }, []);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  return (
    <div>
        
        
     <h1>{color}</h1> 
    </div>
  );
};

export default Random;
