import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioImage from './images/portfolio.png';
import membersImage from './images/members.png';
import projectUI from './images/projectUI.png';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App relative">
      <Header />
      <Intro />
      <div className='flex w-full flex-wrap justify-around items-center'>
        <Project 
          title='My Portfolio' 
          image={portfolioImage}
          description='My MERN stack portfolio.' 
          sourceLink='https://github.com/Koushlendra-Kumar/portfolio-site' 
          previewLink='https://koushlendra-kumar.github.io/portfolio-site/'
          />
      <Project 
          title='Members Only' 
          image={membersImage}
          description='User authentication web app.' 
          sourceLink='https://github.com/Koushlendra-Kumar/Members-only' 
          previewLink='https://topclub.herokuapp.com/'
          />
      <Project 
          title='Modern Furniture' 
          image={projectUI}
          description='Api to perform CRUD operations.' 
          sourceLink='https://github.com/Koushlendra-Kumar/Modern-furniture' 
          previewLink='https://modern-furniture-production.up.railway.app/'
          />
      </div>
      
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
