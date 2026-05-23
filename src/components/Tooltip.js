import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Instead of a wrapper div, we clone the child (h2 or p) to inject the exact 
  // class, events, and DOM structure Cypress expects.
  return React.cloneElement(children, {
    className: 'tooltip',
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    
    // We place the original text and the tooltip box directly inside the h2/p
    children: (
      <React.Fragment>
        {children.props.children}
        {isVisible && <div className="tooltiptext">{text}</div>}
      </React.Fragment>
    )
  });
};

export default Tooltip;