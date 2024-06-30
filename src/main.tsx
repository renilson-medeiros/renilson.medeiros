// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.tsx';
import Experience from './Experience.tsx';
import About from './About.tsx';
import Techskill from './Techskill.tsx';
import Projects from './Projects.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx';
import CaseStudy from './pages/ProjetoPagamento.jsx';
import './index.css';
import 'non.geist';

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
