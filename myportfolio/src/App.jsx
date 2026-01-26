import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
