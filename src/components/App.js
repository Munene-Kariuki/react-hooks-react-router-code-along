import React from "react";
import { Route, Routes } from "react-router-dom"
import About from "./About";
import Home from "./Home";
import Login from "./LogIn";
import Messages from "./Messages";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App