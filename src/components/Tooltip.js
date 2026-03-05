import React, { useState } from 'react';
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return React.cloneElement(
    children, 
    {
      className: "tooltip",
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
    },
    children.props.children,
    
    isVisible && <div className="tooltiptext">{text}</div>
  );
};

export default Tooltip;