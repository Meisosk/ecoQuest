import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Facilities from "./components/Facilities.jsx";
import Donation from "./components/Donation.jsx";
import About from "./components/About.jsx";
import QuestsPage from "./components/QuestsPage.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import Register from "./components/FakeRegister.jsx";
import AddUserToDatabase from "./AddUserToDatabase.jsx";
import Login from "./components/FakeSignIn.jsx";
import { FormProvider } from "./components/FormProvider.jsx";
import { UserProvider } from "./UserNameAndEmail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormProvider>
      <AuthProvider>
        <UserProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/donate" element={<Donation />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/quests" element={<QuestsPage />} />
                <Route path="/fakesignup" element={<Register />} />
                <Route path="/fakesignin" element={<Login />} />
                <Route path="/test" element={<AddUserToDatabase />} />
              </Routes>
            </Layout>
          </Router>
        </UserProvider>
      </AuthProvider>
    </FormProvider>
  </React.StrictMode>
);

//wrapping the entire Router with authprovider means all componenents within
//can access the authentication context
