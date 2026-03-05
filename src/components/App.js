
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
        <Tooltip text="this is a tooltip">
          <h2>Hover over me</h2>
        </Tooltip>

        <br/>
        <br/>

        <Tooltip text="this is another tooltip">
          <p style={{borderBottom: "1px dotted black", display: "inline" }}>
            Hover over me to see another tooltip
          </p>
        </Tooltip>
    </div>
  )
}

export default App;
