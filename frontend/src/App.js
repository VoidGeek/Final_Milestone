import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/about';
import Homepage from './components/home';
import Course from './components/course';
import Footer from './components/Footer'; // Import the Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Library from './components/library';

// This is main file
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
