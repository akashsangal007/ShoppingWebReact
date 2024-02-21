import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navmenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary  fixed-top  ">
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
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mt-1 m-lg-2">
              <Link to='/login'><FontAwesomeIcon color='white' icon={faShoppingCart}></FontAwesomeIcon>
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  0
                </span></Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white " to="signup">SignUp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white " to="login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navmenu
