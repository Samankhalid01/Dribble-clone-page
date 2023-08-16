import React from 'react';
import Header from './Components/header';
import About from './Components/About';
import ContactPage from './Components/ContactPage';
import PricingPage from './Components/Pricingpage';
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
          <Route path="/features" element={<PricingPage />} />
          <Route path="/Services" element={<ContactPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
