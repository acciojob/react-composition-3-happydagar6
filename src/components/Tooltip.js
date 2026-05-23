import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We MUST use cloneElement so the <h2> and <p> get the "tooltip" class directly!
  return React.cloneElement(
    children,
    {
      className: 'tooltip',
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false)
    },
    // This places the original text and the red tooltip box directly inside the h2/p
    children.props.children,
    isVisible && <div className="tooltiptext">{text}</div>
  );
};

export default Tooltip;