import React, { PureComponent } from 'react';
import './App.css';
import sessions from './data/sessions.json';

class App extends PureComponent {
  render() {
    return (
      <LineGraph data={sessions} />
    );
  }
}

export default App;
