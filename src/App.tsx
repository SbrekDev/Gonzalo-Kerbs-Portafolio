
import ContactComponent from "./components/ContactComponent"
import PresentationComponent from "./components/PresentationComponent"
import ProjectsComponent from "./components/ProjectsComponent"
import SkillsComponent from "./components/SkillsComponent"
import NavComponent from "./components/NavComponent"


function App() {



  return (
    <>

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
