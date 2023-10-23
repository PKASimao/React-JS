import React from "react"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Experience from './Pages/Experience'
import Skils from './Pages/Skils'
import Education from "./Pages/Education"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skils" element={<Skils/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
