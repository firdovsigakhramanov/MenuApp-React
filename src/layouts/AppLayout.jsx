import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Login from '../pages/Login'

function AppLayout() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='bg-gray-100 pb-30'>
                <Link to="dashboard" className='hidden'></Link>
                <Outlet />
            </div>
            <Footer />
        </>


    )
}

export default AppLayout