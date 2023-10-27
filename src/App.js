import Header from "./components/Header";
import Project from "./components/Project";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import Projects from "./data/Projects";


function App() {
  const projectList = Projects.map((project) => (
    <Project
      title={project.title}
      image={project.image}
      description={project.description}
      sourceLink={project.sourceLink}
      previewLink={project.previewLink}
    />
  ));
  return (
    <div className="App relative">
      <Header />
      <Intro />
      <div className="flex w-full flex-wrap justify-around items-center">
        {projectList}
      </div>
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
