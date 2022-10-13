import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Intro from './components/Intro';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Project />
      <Project />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
