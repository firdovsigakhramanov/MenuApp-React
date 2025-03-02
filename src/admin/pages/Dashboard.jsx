import React from 'react'
import TopBar from '../layout/TopBar'
import Sidebar from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <TopBar />

            <div className=' bg-gray-100 pt-30  lg:px-[7%]  px-[5%] flex font-primary gap-8'>
                <Sidebar />
                <div className=' pl-[30%] w-[100%] '>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard