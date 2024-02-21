import React from 'react'
import { Route, Routes } from 'react-router'

import Navmenu from './Navmenu'
import { AdminDashboard } from '../Components/AdminDashboard'
import { UnAuthorized } from '../Components/UnAuthorized'
const AdminLayout = () => {
    return (
        <>
            <Navmenu />
            <div className=' mt-2'>
                <Routes>
                    <Route path='' element={<AdminDashboard />} />
                    <Route path='/unauthorize' element={<UnAuthorized />} />
                    <Route path='*' element={<UnAuthorized />} />
                </Routes>
            </div>
        </>
    )
}

export default AdminLayout