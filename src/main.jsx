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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
