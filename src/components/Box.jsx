import React, { useState } from 'react';

function Box({ hoverColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
    
  return (
    <>
        <li 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={isHovered ? { backgroundColor: hoverColor } : null}
        ></li>
    </>
  )
}

export default Box