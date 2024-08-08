import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portofolio from "./components/Portofolio"
import Skills from "./components/Skills"
import Error from "./components/Error"
import {Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portofolio' element={<Portofolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </>
  )
}

export default App
