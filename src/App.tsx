import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default App;
