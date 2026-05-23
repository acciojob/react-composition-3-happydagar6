import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We explicitly take the child, and return it with the class 'tooltip' 
  // and the tooltip div directly as its child.
  // This bypasses cloneElement issues and forces the structure the test wants.
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
      {isVisible && <div className="tooltiptext">{text}</div>}
    </ChildComponent>
  );
};

export default Tooltip;