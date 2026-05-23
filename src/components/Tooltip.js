import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We clone the child element to inject the className, events, and tooltip text directly into it.
  return React.cloneElement(
    children, 
    {
      className: 'tooltip',
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
    },
    // We keep the original text of the child (e.g., "Hover over me")
    children.props.children,
    
    // We conditionally append the tooltip text box INSIDE the child element
    isVisible && <div className="tooltiptext">{text}</div>
  );
};

export default Tooltip;