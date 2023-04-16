import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Note from "./routes/Note"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  )
}

export default App
