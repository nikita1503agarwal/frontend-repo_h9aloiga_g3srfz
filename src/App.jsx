import Home from './pages/Home'
import WhatWeProtect from './pages/WhatWeProtect'
import WhySalus from './pages/WhySalus'
import K9Division from './pages/K9Division'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-protect" element={<WhatWeProtect />} />
      <Route path="/why-salus" element={<WhySalus />} />
      <Route path="/k9-division" element={<K9Division />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
