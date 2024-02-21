import React, { useState, useEffect } from 'react'
import ProductType from './ProductType';
import { useNavigate, useParams } from 'react-router';
import Spinner from '../../../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction } from '../../../Actions/AsynCartOperations';
import { login } from '../../../Features/userSlice';


const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.user.user)

  useEffect(() => {
    doSomething();
    console.log('hi', id.id)
    var user = JSON.parse(localStorage.getItem('user'))
    if (user != undefined) {
      dispatch(login(user))
      if (user.roleId === 1) {
        navigate('/admin')
      } else if (user.roleId === 2) {
        navigate('/user')
      }
    }
  }, [])
  useEffect(() => {
    if (id.id !== undefined) {
      setProducts(filteredProducts);
      var filter = filteredProducts.filter(x => x.productTypeId == id.id);
      setProducts(filter)
    } else {
      setProducts(filteredProducts);
    }
  }, [id])

  const doSomething = async () => {
    await fetch("https://localhost:7036/api/Product")
      .then(res => res.json())
      .then(data => { setProducts(data); setFilteredProducts(data); })
      .catch(error => console.error(error));
  }

  const AddProductToCart = (product) => {
    if (loggedInUser === null || loggedInUser === '')
      navigate("login")
    else {
      console.log('in',loggedInUser)
      console.log("from add")
      console.log(product)
      var details = {
        userId: loggedInUser.userId,
        productId: product.productId,
        quantity: 1, unitPrice: product.unitPrice
      }
      var userId1 = loggedInUser.userId;
      console.log('2nd paparam', userId1)
      dispatch(AddToCartAction(details, userId1))

    }
  }
  if (products.length == 0) return (<Spinner />)
  else
    return (
      <div className='container'>

        <div className=' row mt-3 '>

          <div className=' col col-md-2  mt-5'>
            <ProductType />
          </div>
          <div className=' col col-md-10'>
            <div className=' row mt-4 '>
              <h2>Products</h2>
              {products.map(function (product) {
                return (
                  <div className=' col col-md-4 mb-5' key={product.productId}>
                    <div className="card" style={{  width: '20rem', height: '24rem'  }}>
                    <img className="card-img-top" src={product.imageUrl} alt="Card image cap" />
                    <h4 style={{ position: 'absolute', left: '1rem', bottom: '4rem' }} className="card-text text-white ">₹ {product.unitPrice}</h4>
                    <button style={{ position: 'absolute', right: '0rem', bottom: '4rem' }} className="btn btn-dark" onClick={() => AddProductToCart(product)}>Add To Cart</button>
                      <div className="card-body">                        
                        <h6 className="fw-bold">{product.productName}</h6>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>



      </div>
    )
}

export default Products