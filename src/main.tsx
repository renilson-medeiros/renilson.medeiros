import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import Experience from './Experience.tsx'
import About from './About.tsx'
import Techskill from './Techskill.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'
import Footer from './Footer.tsx'
import './index.css'
import 'non.geist'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Experience />
    <About />
    <Techskill />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
