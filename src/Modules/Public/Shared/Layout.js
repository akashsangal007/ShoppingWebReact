import React, { lazy } from 'react'
import { Route, Routes } from 'react-router'
import Navmenu from './Navmenu'
import SignUp from '../Components/SignUp'
import Login from '../Components/Login'
import Products from '../Components/Products'
import { UnAuthorized } from '../Components/UnAuthorized'

const AdminLayout = lazy(()=> import('../../Admin/Shared/Layout'))
const UserLayout = lazy(()=> import('../../User/Shared/Layout'))

export const Layout = () => {
  return (
    <div >
      <Navmenu />
      <div className='mt-5'>
        <Routes>
          <Route index element={<Products />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="productType/:id" element={<Products />} />
          <Route path='admin' element={<AdminLayout />} />
          <Route path='user' element={<UserLayout />} />
          <Route path='*' element={<UnAuthorized />} />
        </Routes>
      </div>
    </div>
  )
}
