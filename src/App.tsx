import React from 'react';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-3xl font-bold'>Welcome to my Portfolio!</h1>
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default App;
