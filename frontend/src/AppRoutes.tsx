// imports
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import React from 'react';
  
  // importing pages
  import Home from './pages/Home';
  import Login from './pages/Login';
  import Register from './pages/Register';
  
  // pages routes
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  