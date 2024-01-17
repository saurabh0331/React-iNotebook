import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { Route,  Routes } from 'react-router-dom'
import Home from './components/Home'
import Notestate from './context/notes/Notestate'
import Alerts from './components/Alerts'

export default function App() {
  return (
   <>
   <Notestate>

 
   <Navbar/>
   <Alerts/>
   <div className="container">
   <Routes>
   
   <Route path='/' element={ <Home/>}/>
   <Route path='/about' element={ <About/>}/>

   </Routes>
   
   </div>
   
   </Notestate>
  
   </>
  )
}
