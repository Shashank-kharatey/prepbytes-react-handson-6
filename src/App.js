import React from 'react'
import { Route,Routes } from 'react-router-dom'
import "./App.css"
import Home from './components/pages/Home'

import Navbar from './components/layout/Navbar'
import Student from './components/pages/Student'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import PageError from './components/pages/PageError'
import Edit from './components/pages/Edit'
import AddStudent from './components/pages/AddStudent'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/student' element={<Student />}/>
        <Route path='/student/add' element={<AddStudent />}/>
        <Route path="/student/users/edit/:id" element={<Edit />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<PageError />} />
      </Routes>
    </div>
  )
}

export default App
