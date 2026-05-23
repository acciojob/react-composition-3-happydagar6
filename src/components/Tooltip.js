import React, { useState } from 'react';
import '../styles/App.css'; // Make sure this path points to your CSS file!

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We explicitly take the child, and return it with the class 'tooltip' 
  // and the tooltip div as a child, hidden or visible via style.
  const ChildComponent = children.type;
  const childProps = children.props;

  return (
    <ChildComponent
      {...childProps}
      className={`tooltip ${childProps.className || ''}`.trim()}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {childProps.children}
      {/* Tooltip is always in the DOM, just hidden/shown via display property */}
      <div 
        className="tooltiptext" 
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        {text}
      </div>
    </ChildComponent>
  );
};

export default Tooltip;