import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './header/heder'
import Skills from './Sayfalar/Skills'
import Footer from './footer/footer'
import Home from './Sayfalar/Home'
import Contact from './Sayfalar/Contact'
import Projet from './Sayfalar/Project'
function App() {

  return (
    <>
    <Header></Header>
<Routes>
<Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
                <Route path="/project" element={<Projet/>} />

</Routes>
<Footer></Footer>
    </>
  )
}

export default App
