import React, { useState } from 'react';
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

 
  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    
    <div 
      className="tooltip" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      
      {children}

      {isTooltipVisible && (
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;