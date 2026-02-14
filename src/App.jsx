import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
      <Navbar />
      {/* Stack them so they are all on one page to allow scrolling */}
      <Banner />
      <Skills />
      <Contact />
   
    
     

      
     
     
      
     
    </>
  )
}

export default App
