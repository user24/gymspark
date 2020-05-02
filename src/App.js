import React, { PureComponent } from 'react';
import './App.css';
import Workouts from './components/workouts';
import workoutData from './data/workouts.json';

class App extends PureComponent {
  render() {
    return (
      <Workouts workouts={workoutData} />
    );
  }
}

export default App;
