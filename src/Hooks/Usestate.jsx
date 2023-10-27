import React, { useState } from 'react';

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const [msg, setMsg] = useState('subscribe🔔');
  const [bgcolor, setBgcolor] = useState('yellow');

  return (
    <div className='app'>
      <h1 style={{ color: color,backgroundColor:bgcolor }}>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setColor('green')}>Change Color</button>
      <button onClick={() => setMsg('subscribed')}>{msg}</button>
      <button onClick={() => setBgcolor("orange")}>Change Background Color</button>
    </div>
  );
};

export default UseStateComponent;
