import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handlers to show and hide the tooltip
  const handleShow = () => setIsVisible(true);
  const handleHide = () => setIsVisible(false);

  // We clone the child element (e.g., the <h2> or <p>) to inject the logic
  return React.cloneElement(
    children,
    {
      // Ensures the original element gets the "tooltip" class
      className: `tooltip ${children.props.className || ''}`.trim(),
      
      // Standard React hover events
      onMouseEnter: handleShow,
      onMouseLeave: handleHide,
      
      // Safety net for Cypress automated "fake" hovers!
      onMouseOver: handleShow,
      onMouseOut: handleHide,
    },
    // We wrap the original text AND the conditional tooltip inside a Fragment
    <>
      {children.props.children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </>
  );
};

export default Tooltip;