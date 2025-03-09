import React from 'react'
import TopBar from '../layout/TopBar'
import Sidebar from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'
import Modal from '../../layouts/Modal'
import NewProductForm from '../components/NewProductForm'

function Dashboard() {
    return (
        <div>
            <TopBar />

            <div className=' bg-gray-100 py-30 lg:px-[7%]  px-[5%] flex font-primary gap-8'>
                <Sidebar />
                <div className=' pl-[30%] w-[100%] '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard