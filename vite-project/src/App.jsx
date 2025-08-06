// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import ToDoList from './ToDoList.jsx'; // Add this import



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        //<Route path="/todo" element={<ToDoList />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
    </Router>
  );
}

export default App;