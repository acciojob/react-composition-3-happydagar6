import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      
      {/* First Tooltip Element */}
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <br /><br />

      {/* Second Tooltip Element */}
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

    </div>
  );
};

export default App;