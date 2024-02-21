import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { login, logout } from '../../../Features/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { GetCardDetailsAction } from '../../../Actions/AsynCartOperations'
import { cartCount } from '../../../Features/cartSlice'


const Navmenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedInUser = useSelector(state => state.user.user)
  const cartCounter = useSelector(state => state.cart.count)

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'))
    console.log('us',user)
    if (user != undefined) {
      if (user.roleId === 1) {
        navigate('/user/unauthorize')
      }
      else {
        dispatch(login(user))
        dispatch(GetCardDetailsAction(user.userId))
      }
    }
    else {
      navigate('/login')
    }

  }, [])


  const LogoutUser = (e) => {
    e.preventDefault();
    dispatch(logout())
    navigate('/')
    localStorage.removeItem('user');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary  mb-2 fixed-top  ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white" to="">Shopify</NavLink>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link text-white active" aria-current="page" to="">Products</NavLink>
            </li>
          </ul>

          {
            loggedInUser != null && loggedInUser != undefined &&
            loggedInUser.userName != null
            &&
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white " >
                  <span><FontAwesomeIcon icon={faUserCircle} /></span>{loggedInUser.userName}
                </NavLink>
              </li>
              <Link to='/user/cart'> <li className="nav-item mt-2 m-lg-2">
                <FontAwesomeIcon color='white' icon={faShoppingCart}></FontAwesomeIcon>
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger">
                  {cartCounter}
                </span>
              </li></Link>
              <li className="nav-item ms-2">
                <NavLink className="nav-link text-white " onClick={LogoutUser}>Logout</NavLink>
              </li>
            </ul>
          }

        </div>
      </div>
    </nav>

  )
}

export default Navmenu
