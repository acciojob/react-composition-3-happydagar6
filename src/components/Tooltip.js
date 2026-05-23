import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We clone the child element to attach the 'tooltip' class directly to the h2/p
  const clonedChild = React.cloneElement(children, {
    className: `tooltip ${children.props.className || ''}`.trim(),
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    // Cypress synthetic events fix
    onMouseOver: () => setIsVisible(true),
    onMouseOut: () => setIsVisible(false)
  });

  return (
    <>
      {/* 
        By cloning the child, the final rendered HTML becomes:
        <h2 class="tooltip">Hover over me <div class="tooltiptext">...</div></h2>
        This matches the selector 'h2.tooltip > div' exactly.
      */}
      {React.cloneElement(clonedChild, {
        children: (
          <>
            {children.props.children}
            {isVisible && <div className="tooltiptext">{text}</div>}
          </>
        )
      })}
    </>
  );
};

export default Tooltip;