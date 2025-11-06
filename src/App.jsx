import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

import './App.css'

function App() {
  return (
    <>
      <Header />
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
