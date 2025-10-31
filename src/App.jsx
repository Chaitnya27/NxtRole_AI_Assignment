import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Header from './components/Header'
import Hero from './pages/Hero'
import Features from './pages/Features'
import Layout from './components/Layout'

function App() {
  

  return (
   <>
    
   <Routes>
    <Route element={<Layout/>}>
     <Route index element={<Hero />} /> 
    <Route path='/hero' element={<Hero/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/features' element={<Features/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
