import { useContext } from "react";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Intro from "./component/intro/intro";
import ProjectList from "./component/projectList/projectList";
import Toggle from "./component/toggle/toggle";
import { ToggleContext } from "./context/toggleContext";


function App() {
  const toggleCon = useContext(ToggleContext)

  const { darkMode } = toggleCon

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
