import React from 'react';
import './App.css';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate.js';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
