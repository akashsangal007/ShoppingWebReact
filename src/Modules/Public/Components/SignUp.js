import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

const SignUp = () => {
  const initialValues = {
    name: '', email: '', password: '', phone: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required.'),
    email: Yup.string().required('Email is Required.').email('Invalid email address'),
    password: Yup.string().required('Password is Required.'),
    phone:Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Required'),
  });
  const SignUp = (values) => {

  }
  return (
    <div className="container ">
      <div className="row">
        <div className="col col-md-6 m-lg-auto">
          <h2 className='mt-3'>SignUp</h2>
          <br />
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={SignUp}>
            <Form>
              <div className="form-group">
                <label>Name</label>
                <Field type="text" className="form-control"  name='name'  placeholder="Enter Name" />
                <ErrorMessage className="text-danger" name='name' component="div" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" className="form-control" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                <ErrorMessage className="text-danger" name='email' component="div" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" className="form-control" name='password'  placeholder="Enter Password" />
                <ErrorMessage className="text-danger" name='password' component="div" />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Field type="text" className="form-control"  name='phone' placeholder="Enter Phone Number" />
                <ErrorMessage  className="text-danger" name='phone' component="div" />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
              <br />
              <h6>
                Already Registered? <span><Link to="/login" className="btn btn-outline-primary">
                  Login</Link>
                </span>
              </h6>
            </Form>
          </Formik>

        </div>
      </div>
    </div>

  )
}

export default SignUp