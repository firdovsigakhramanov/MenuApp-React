import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'
import Contact from './pages/Contact'
import Interior from './pages/Interior'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='contact' element={<Contact />} />
          <Route path='interior' element={<Interior />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App