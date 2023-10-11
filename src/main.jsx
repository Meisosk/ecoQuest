import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Challenges from "./components/Challenges.jsx";
import Facilities from "./components/Facilities.jsx";
import Donation from "./components/Donation.jsx";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
