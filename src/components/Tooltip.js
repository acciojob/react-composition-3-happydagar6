import React, { useState } from 'react';
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  // State to manage the visibility of the tooltip
  const [isVisible, setIsVisible] = useState(false);

  // Event handlers to show/hide the tooltip
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div 
      className="tooltip" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* The element over which the tooltip appears */}
      {children}
      
      {/* Conditionally render the tooltip text based on state */}
      {isVisible && (
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;