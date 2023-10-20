import Header from "./components/Header";
import Project from "./components/Project";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import membersImage from "./images/members.png";
import projectUI from "./images/projectUI.png";
import Chat from "./components/Chat";

const Projects = [
  {
    title: "Shopping Cart",
    image: projectUI,
    description: "React shopping cart app",
    sourceLink: "https://github.com/Koushlendra-Kumar/shopping-cart",
    previewLink: "https://global-shopping-cart.netlify.app/",
  },
  {
    title: "Community Club app",
    image: membersImage,
    description: "User authentication web app.",
    sourceLink: "https://github.com/Koushlendra-Kumar/Members-only",
    previewLink: "#",
  },
  {
    title: "modern Furniture",
    image: projectUI,
    description: "Api to perform CRUD operations.",
    sourceLink: "https://github.com/Koushlendra-Kumar/Modern-furniture",
    previewLink: "#",
  },
];

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
