import { useRef } from 'react'
import NavbarTop from "./components/NavbarTop.jsx"
import Header from "./components/Header.jsx"
import Plans from "./components/plans/Plans.jsx"
import Unidades from "./components/unidades/Unidades.jsx"
import Sobre from "./components/sobre/Sobre.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const refTop = useRef(null)
  const refPlanos = useRef(null)
  const refUnidades = useRef(null)
  const refSobre = useRef(null)

  function irPlanos(){
    refPlanos.current?.scrollIntoView({behavior: 'smooth'})
  }
  function irUnidades(){
    refUnidades.current?.scrollIntoView({behavior:'smooth'})
  }
  function irSobre(){
    refSobre.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
      <NavbarTop irPlanos={irPlanos} irUnidades={irUnidades} irSobre={irSobre}/>
      <Header/>
      <Plans ref={refPlanos}/>
      <Unidades ref={refUnidades}/>
      <Sobre ref={refSobre}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
