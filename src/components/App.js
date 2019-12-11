import React from 'react';
import './App.css';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="app">
      <Display result='0'/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
