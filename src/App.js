import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/index.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Search from './components/Search';

// Pages
import Home from './pages/Home';
import Project from './pages/Project';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Visualizations from './pages/Visualizations';
import Team from './pages/Team';
import Contact from './pages/Contact';
import References from './pages/References';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <ScrollToTop />
        <Search />
        
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results" element={<Results />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </motion.main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;