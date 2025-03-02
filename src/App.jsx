import React from 'react'
import { BrowserRouter, createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'
import Contact from './pages/Contact'
import Interior from './pages/Interior'
import AppLayout from './layouts/AppLayout'
import Dashboard from './admin/pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import MenuManage from './admin/pages/MenuManage'
import EditCategory from './admin/pages/EditCategory'
import NewProduct from './admin/pages/NewProduct'
import Users from './admin/pages/Users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='interior' element={<Interior />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        {/* Login Page */}
        <Route path='login' element={<Login />} />

        {/* Admin Panel */}
        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<Navigate replace to='menumanage' />} />
          <Route path='menumanage' element={<MenuManage />} />

          <Route path='editcategory' element={<EditCategory />} />
          <Route path='newproduct' element={<NewProduct />} />
          <Route path='users' element={<Users />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App