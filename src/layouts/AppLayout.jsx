import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Login from '../pages/Login'

function AppLayout() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='bg-gray-100 pb-30'>
                <Outlet />
            </div>
            <Footer />
        </>


    )
}

export default AppLayout