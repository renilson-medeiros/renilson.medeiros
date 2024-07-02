import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Experience from './Experience';
import About from './About';
import Techskill from './Techskill';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CaseStudy from './pages/ProjetoPagamento'
import Project from './pages/Project'
import './index.css';
import 'non.geist';
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SpeedInsights/>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Experience />
            <About />
            <Techskill />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);