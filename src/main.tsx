import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Experience from './Experience';
import About from './About';
import Techskill from './Techskill';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CaseStudy from './pages/ProjetoPagamento';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
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
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
