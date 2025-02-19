import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function AppLayout() {
    return (
        <div className='bg-gray-100'>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout