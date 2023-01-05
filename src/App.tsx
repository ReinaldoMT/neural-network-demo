import React, { useState } from 'react';

import './App.css';
import { Chart } from './Chart';
import { generatePoints } from './dataGenerator';

function App() {

  console.log(generatePoints(10));

  const [points, setPoints] = useState(generatePoints(100))

  return (
    <div className="App">
      <div className="App-header" style={{height: '500px'}}>
        <Chart points={points}></Chart>
      </div>
    </div>
  );
}

export default App;
