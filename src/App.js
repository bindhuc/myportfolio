import React from 'react'
import Home from './new/Home'
import Navbar from './new/Navbar'
import About from './new/About'
import Contact from './new/Contact'
import Project from './new/Project'
import {BrowserRouter as Router, Routes, Route } from  'react-router-dom'


const App = () => {
  return (
    <div >
      <Router>
        <Navbar />
      <Routes>

     <Route path='/' element={<Home/>}/>
      {/* <Route path='/Home' element={<Home/>}/> */}
      <Route path='/About' element={<About/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      

     {/* </Route> */}
     </Routes>
     </Router>
    </div>
  )
}

export default App