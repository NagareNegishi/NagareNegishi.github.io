import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Skills from './components/Skills.jsx'
import { softwareProjects, gameProjects } from './data/projects.js'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Skills />
        <ProjectSection id="projects" title="Featured Projects" projects={softwareProjects} />
        <ProjectSection id="game-dev" title="Game Development" projects={gameProjects} />
        <Contact />
      </main>
    </>
  )
}

export default App
