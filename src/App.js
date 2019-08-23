import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './button.css';
import {Icon} from 'react-fa'





///
function App() {
  return (
    <div className="App">
        {Button()}
    </div>
  );
}



function Button() {
  return (
    
    <AwesomeButton type="primary" style={{margin: 100}}>
<Icon  name="bars" />
<span style={{paddingLeft: 10}}>Cedrik's button</span>
</AwesomeButton>

  );
}

export default App;
