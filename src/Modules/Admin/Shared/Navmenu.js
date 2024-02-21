import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { login, logout } from '../../../Features/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navmenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedInUser = useSelector(state => state.user.user)
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'))
    if (user != undefined) {
        if (user.roleId === 2) {
            navigate('/admin/unauthorize')
        }
        else {
            dispatch(login(user))           
        }
    }
    else {
        navigate('/login')
    }

}, [])
  const LogoutUser = (e) => {
    e.preventDefault();
    console.log('logout')
    dispatch(logout())
    navigate('/')
    localStorage.removeItem('user');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="">Shopify</NavLink>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          </ul>
          {loggedInUser != null && <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white " >
                <span><FontAwesomeIcon icon={faUserCircle} /></span>{loggedInUser.userName}</NavLink>
            </li>
            <li className="nav-item ms-2">
              <NavLink className="nav-link text-white " onClick={LogoutUser}>Logout</NavLink>
            </li>
          </ul>}
        </div>
      </div>
    </nav>

  )
}

export default Navmenu
