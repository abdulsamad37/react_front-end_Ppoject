import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Feedback from "./components/Feedback.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Sidebar will be rendered for all the routes */}
        <Route path="/" element={<Sidebar />}>
          {/* Home route */}
          <Route index element={<Home />} />
          {/* Dashboard route */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* Analytics route that accepts data via `state` */}
          <Route path="analytics" element={<Analytics />} />
          {/* About route */}
          <Route path="about" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="reports" element={<Reports />} />{" "}
          {/* Add the Reports route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
