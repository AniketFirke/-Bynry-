import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfileDetails from "./pages/ProfileDetails";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
