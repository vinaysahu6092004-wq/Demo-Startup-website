import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import Home from "./Pages/Home"
import Apply from "./Pages/Apply"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
