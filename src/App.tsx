
import ContactComponent from "./components/ContactComponent"
import PresentationComponent from "./components/PresentationComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import SkillsComponent from "./components/SkillsComponent"
import NavComponent from "./components/NavComponent"


function App() {



  return (
    <>
      <div
        className="h-screen w-screen bg-fixed bg-cover bg-center absolute -z-10"
        style={{ backgroundImage: 'url("images/background.webp")' }}
      ></div>
      <div className="mt-0 relative">
        <NavComponent />
      </div>
      <div>
        <PresentationComponent />
      </div>
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
}

export default App
