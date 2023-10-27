import React, { useRef } from 'react';

const Focus = () => {
  const inputElement = useRef(0); 
  function handleFocus() {
    inputElement.current.focus(); 
  }

  return (
    <div>
      <input ref={inputElement} />
      <button onClick={handleFocus}>Focus</button> 
    </div>
  );
};

export default Focus;




