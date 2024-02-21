import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const AdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'))
    if (user != undefined) {
      if (user.roleId === 2) {
        navigate('/admin/unauthorize')
      }
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <div>AdminDashboard</div>
  )
}
