import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // We clone the child element (like the <h2>) to inject the class, events, and styles directly into it
  return React.cloneElement(
    children,
    {
      className: `tooltip ${children.props.className || ''}`.trim(),
      
      // Handle both standard React hovers and Cypress synthetic test hovers
      onMouseEnter: () => setIsVisible(true),
      onMouseLeave: () => setIsVisible(false),
      onMouseOver: () => setIsVisible(true),
      onMouseOut: () => setIsVisible(false),
      
      // Inline styles to perfectly match the video's dotted underline without needing external CSS
      style: {
        ...children.props.style,
        position: 'relative',
        display: 'inline-block',
        borderBottom: '1px dotted black',
        cursor: 'pointer'
      }
    },
    
    // 1. Keep the original text ("Hover over me")
    ...React.Children.toArray(children.props.children),
    
    // 2. Inject the tooltip box as a direct child, using a 'key' so React never drops it during tests
    isVisible ? (
      <div 
        key="tooltip-box" 
        className="tooltiptext"
        style={{
          backgroundColor: 'red',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          borderRadius: '5px',
          position: 'absolute',
          zIndex: 1,
          bottom: '130%',
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: '160px',
          fontWeight: 'bold'
        }}
      >
        {text}
      </div>
    ) : null
  );
};

export default Tooltip;