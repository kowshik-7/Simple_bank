import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/admin" element={<Admin />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
