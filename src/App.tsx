import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className='flex w-full flex-wrap justify-around items-center'>
        <Project 
          title='My Portfolio' 
          description='My MERN stack portfolio.' 
          sourceLink='https://github.com/Koushlendra-Kumar/portfolio-site' 
          previewLink='https://koushlendra-kumar.github.io/portfolio-site/'
          />
      <Project 
          title='Members Only' 
          description='User authentication web app.' 
          sourceLink='https://github.com/Koushlendra-Kumar/Members-only' 
          previewLink='https://topclub.herokuapp.com/'
          />
      <Project 
          title='Modern Furniture' 
          description='Api to perform CRUD operations.' 
          sourceLink='https://github.com/Koushlendra-Kumar/Modern-furniture' 
          previewLink='https://modern-furniture-production.up.railway.app/'
          />
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
