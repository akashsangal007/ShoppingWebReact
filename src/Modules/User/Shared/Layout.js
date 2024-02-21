import React from 'react'
import { Route, Routes } from 'react-router'
import Navmenu from './Navmenu'
import Products from '../Components/Products'
import { Cart } from '../Components/Cart'
import Address from '../Components/Address'
import { OrderDetails } from '../Components/OrderDetails'
import Order from '../Components/Order'
import { UnAuthorize } from '../Components/UnAuthorize'


const UserLayout = () => {
  return (
    <>
      <Navmenu />
      <div className=' mt-5'>
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='/productType/:id' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          <Route path='/OrderDetails' element={<OrderDetails />} />
          <Route path='/order/:orderId' element={<Order />} />
          <Route path='/unauthorize' element={<UnAuthorize />} />
          <Route path='*' element={<UnAuthorize />} />
        </Routes>
      </div>
    </>
  )
}

export default UserLayout