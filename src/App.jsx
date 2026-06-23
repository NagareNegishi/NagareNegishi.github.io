import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
