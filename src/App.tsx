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

const Projects = [
  {title: 'My Portfolio', image: portfolioImage, description: 'My MERN stack portfolio.', sourceLink: 'https://github.com/Koushlendra-Kumar/portfolio-site', previewLink: 'https://koushlendra-kumar.github.io/webdevkoushal/'},  
  {title: 'Community Club app', image: membersImage, description: 'User authentication web app.', sourceLink: 'https://github.com/Koushlendra-Kumar/Members-only', previewLink: 'https://members-only-production-ad01.up.railway.app/'},
  {title: 'modern Furniture', image: projectUI, description: 'Api to perform CRUD operations.', sourceLink: 'https://github.com/Koushlendra-Kumar/Modern-furniture', previewLink: 'https://modern-furniture-production.up.railway.app/'},
]

function App() {
  const projectList = Projects.map(project => (
    <Project 
          title={project.title}
          image={project.image}
          description={project.description}
          sourceLink={project.sourceLink}
          previewLink={project.previewLink}
    />
  ))
  return (
    <div className="App relative">
      <Header />
      <Intro />
      <div className='flex w-full flex-wrap justify-around items-center'>
        {projectList}
      </div>
      
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
