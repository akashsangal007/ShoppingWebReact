import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup'

const Address = () => {
  
    const navigate = useNavigate();

    const initialValues = { locality: '', street: '', zipCode: '', city: '', phoneNo: '' }
    const validationSchema =  Yup.object({
        locality: Yup.string().required('Required.'),
        street: Yup.string().required('Required.'),
        city: Yup.string().required('Required.'),
        zipCode: Yup.string().required('Required.'),
        phoneNo:Yup.string().required('Required').matches(/^[0-9]{10}$/, 'Invalid phone number'),
      })

    const GoToOrderDetails = (values) => {
        localStorage.setItem('order_address', JSON.stringify(values))
        navigate('/user/OrderDetails')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-6 m-lg-auto">
                    <h2 className='mt-3'>Delivery Address</h2>
                    <br />
                    <Formik initialValues={initialValues} onSubmit={GoToOrderDetails} validationSchema={validationSchema}>
                        <Form>
                        <div className="form-group">
                            <label>Locality</label>
                            <Field name='locality' type="text" className="form-control" placeholder="Enter Locality" />
                            <ErrorMessage className=' text-danger' name="locality" component="div" />
                        </div>
                        <div className="form-group mt-2 ">
                            <label>Street</label>
                            <Field  name='street' type="text" className="form-control" placeholder="Enter Street" />
                            <ErrorMessage className=' text-danger' name="street" component="div" />
                        </div>
                        <div className="form-group mt-2">
                            <label>ZipCode</label>
                            <Field  type="text" name='zipCode' className="form-control" placeholder="Enter ZipCode" />
                            <ErrorMessage className=' text-danger' name="zipCode" component="div" />
                        </div>
                        <div className="form-group mt-2">
                            <label>City</label>
                            <Field  type="text" name='city' className="form-control" placeholder="Enter City" />
                            <ErrorMessage className=' text-danger' name="city" component="div" />
                        </div>
                        <div className="form-group mt-2">
                            <label>Phone No.</label>
                            <Field  type="text" name='phoneNo' className="form-control" placeholder="Enter Phone No." />
                            <ErrorMessage className=' text-danger' name="phoneNo" component="div" />
                        </div>
                        <br />
                        <button  type='submit' className="btn btn-primary">Proceed</button>
                        <br />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default Address