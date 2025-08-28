import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './header/Heder'
import Skills from './Sayfalar/Skills'
import Home from './Sayfalar/Home'
import Contact from './Sayfalar/Contact'
import Projet from './Sayfalar/Project'
import "./i18n";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projet />} />
      </Routes>
 
    </>
  )
}

export default App
