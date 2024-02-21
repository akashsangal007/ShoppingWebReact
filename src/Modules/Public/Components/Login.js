import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LoginUserAction } from '../../../Actions/AsyncUserReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggedInUser = useSelector(state => state.user.user)
  const [invalid, setinvalid] = useState(false)
  useEffect(() => {
    if (loggedInUser !== null && loggedInUser.roleId !== null) {
      localStorage.setItem('user', JSON.stringify(loggedInUser))
      console.log(loggedInUser.roleId)
      if (loggedInUser.roleId === 1) {
        navigate('/admin')
      } else if (loggedInUser.roleId === 2) {
        navigate('/user')
      }
    }

  }, [loggedInUser])

  const Login = async (values) => {
    let details = { email: values.email, password: values.password }
    await dispatch(LoginUserAction(details))
    if (loggedInUser == undefined || loggedInUser == '')
      setinvalid(true)
  }
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required.').email('Please enter valid email'),
    password: Yup.string().required('Password is required.')
  })

  return (
    <div className="container ">
      <div className="row">
        <div className="col col-md-6 m-lg-auto ">
          <h2 className='mt-md-5'>Please Login To Continue</h2>
          <br />
          <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={Login}


          >
            <Form>
              <div className=" form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <Field className="form-control" type="email" id="email" name="email" />
                <ErrorMessage className=' text-danger' name="email" component="div" />
              </div>
              <br />
              <div className=" form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <Field className="form-control" type="password" id="password" name="password" />
                <ErrorMessage className=' text-danger' name="password" component="div" />
              </div>
              <br />
              <button type="submit" className="m-md-2 btn btn-primary">Submit</button>
              <br />
              <h6 className='m-md-1'>
                Not Registered? <span><Link to='/signup' className="btn btn-outline-primary " >
                  SignUp</Link>
                </span>
              </h6>
              {invalid && <div style={{ color: 'red', marginTop: '10px' }}>
                <label className=' text-danger'>Invalid Credentials!</label>
              </div>}
            </Form>
          </Formik>

        </div>
      </div>
    </div>


  )
}

export default Login