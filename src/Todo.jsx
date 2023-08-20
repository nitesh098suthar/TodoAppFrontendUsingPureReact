import React from 'react'
import './Todo.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home/Home'
import Task from './components/Home/Task'
import Contact from './components/Home/Contact'
import About from './components/Home/About'

const Todo = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/task' element={<Task />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
        </Router>      
    </>
  )
}

export default Todo
