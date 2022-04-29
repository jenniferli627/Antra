import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Portfolio from '../pages/portfolio'
import Contact from '../pages/contact';
import Homepage from '../pages/homepage'

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default Routing;