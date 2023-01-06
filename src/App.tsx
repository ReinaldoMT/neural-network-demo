import React, { MouseEvent, useState } from 'react';

import './App.css';
import { Chart } from './Chart';
import { generatePoint, generatePoints, getSample } from './dataGenerator';
import { generateRandomWeights, guessPointType, train } from './neuron';
import { Point, Weights } from './types';

function App() {
  const pointsQuantity = 200;
  const trainingInteractions = 100_000;

  const [points, setPoints] = useState(generatePoints(pointsQuantity));
  const [weights, setWeights] = useState(generateRandomWeights());
  const [training, setTraining] = useState(false);
  const [interactions, setInteractions] = useState(0);

  const pointClassifier = (point: Point) => guessPointType(weights, point);

  const onTrainClick = (event: MouseEvent) => {
    event.preventDefault();
    if (training) {
      console.warn('training in progress');
    }
    setTraining(true);
    setWeights(trainAll(weights));
    setInteractions(interactions + trainingInteractions);
    setTraining(false);
  }

  const onGeneratePointsClick = (event: MouseEvent) => {
    event.preventDefault();
    if (training) {
      console.warn('training in progress');
    }
    setPoints(generatePoints(pointsQuantity));
  }

  const trainAll = (_weights: Weights) => {
    let newWeights = _weights;
    // const trainingVariation: Weights[] = [{...newWeights}];

    for (let i=0; i < trainingInteractions; i++) {
      const newPoint = generatePoint();
      const sample = getSample(newPoint);
      newWeights = train(newWeights, newPoint, sample);
      // trainingVariation.push({...newWeights});
    }
    return newWeights;
  }

  return (
    <div className="App">
      <div className="App-header" style={{height: '500px'}}>
        <Chart points={points} chartPointClassifier={pointClassifier}></Chart>
        <pre className={training ? 'training' : ''}>
          <span className="comment">Weights</span>
          {JSON.stringify({interactions, ...weights}, null, 2)}
        </pre>
        <div>
          <button disabled={training} onClick={onTrainClick}>Train</button>
          <button disabled={training} onClick={onGeneratePointsClick}>Generate Points</button>
        </div>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default App;
