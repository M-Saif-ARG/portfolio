import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
        <div className="header-content"> {/* Added header-content div */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </header>
    </Router>
  );
};

export default App;