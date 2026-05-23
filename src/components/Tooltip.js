import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Instead of cloning, we extract the exact tag (e.g., 'h2' or 'p') 
  // from the children passed in from App.js
  const Tag = children.type;

  return (
    <Tag
      className="tooltip"
      
      // Standard React hover events
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      
      // Extra safety net for Cypress's synthetic fake hovers
      onMouseOver={() => setIsVisible(true)}
    >
      {/* 1. We render the original text (e.g., "Hover over me") */}
      {children.props.children}
      
      {/* 2. We inject the tooltip text directly inside the tag */}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </Tag>
  );
};

export default Tooltip;