import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We extract the original text/children to spread them directly, avoiding Fragments!
  const originalChildren = React.Children.toArray(children.props.children);

  return React.cloneElement(
    children,
    {
      className: `tooltip ${children.props.className || ''}`.trim(),
      
      // Standard hover events
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      
      // Fallback for Cypress synthetic "fake" hovers
      onMouseOver: () => setIsVisible(true),
    },
    
    // 1. Spread the original children (e.g., "Hover over me")
    ...originalChildren,
    
    // 2. Safely append the tooltip box as a direct sibling of the text
    isVisible ? <div className="tooltiptext">{text}</div> : null
  );
};

export default Tooltip;