import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </header>
      </Router>
    </>
  );
};

export default App;
