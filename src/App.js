import React from 'react';
import Header from './Components/header';
import About from './Components/About';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Home from './Pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* it will be Displayed on all pages */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Pricing />} />
          <Route path="/services" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
