import React, { useEffect, useState } from 'react'
import CartService from '../../../Services/CartService'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { AddToCartAction } from '../../../Actions/AsynCartOperations'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.user.user)
    const cardData = useSelector(state=> state.cart.cart)

    const UpdateItemCount = async (productId, unitPrice, quantity) => {
        if (loggedInUser != null) {
            var details = {
                userId: loggedInUser.userId,
                productId: productId,
                quantity: quantity, unitPrice: unitPrice
            }
            await dispatch(AddToCartAction(details, loggedInUser.userId))        
        }
    }
    
    if (cardData === undefined)
        return (
            <div className=' container'>
                <div className='row align-items-center  min-vh-100 ' >
                    <div className="col-12 text-center">
                        <h1>Your Cart Is Empty. Please Add Items To Your Cart!!</h1>
                    </div>
                </div>
            </div >
        )
    return (
        <div className=' container'>
            <div className=' row '>
                <h1 className='mt-2'>My Cart</h1>
            </div>
            {cardData != undefined && cardData.cartItems != undefined &&
                <div className=' row'>
                    <div className=' col  col-md-8 '>
                        {
                            cardData.cartItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="card mt-3">
                                            <div className=' row m-2'>
                                                <div className='col col-md-3 '>
                                                    <img className=" card-img" src={item.imageUrl} alt="Card image cap" />
                                                </div>
                                                <div className='col col-md-9 '>
                                                    <h5>{item.productName}</h5>
                                                    <p>{item.description}</p>
                                                    <h4>Price : {item.price}₹</h4>

                                                    <ul className="list-group list-group-horizontal justify-content-end " >
                                                        {item.quantity == 1 &&
                                                            <li className="list-group-item cursorPointer  " onClick={() => UpdateItemCount(item.productId, item.unitPrice, 0)}> <FontAwesomeIcon icon={faTrash} /></li>
                                                        }{item.quantity > 1 &&
                                                            <li className="list-group-item cursorPointer " onClick={() => UpdateItemCount(item.productId, item.unitPrice, -1)}> <FontAwesomeIcon icon={faMinusSquare} /></li>
                                                        }

                                                        <li className="list-group-item">{item.quantity}</li>
                                                        <li className="list-group-item cursorPointer" onClick={() => UpdateItemCount(item.productId, item.unitPrice, 1)} ><FontAwesomeIcon icon={faPlusSquare} /></li>
                                                    </ul>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                    <div className='col col-md-4'>
                        <div className=' m-md-3 card'>
                            <h4 className='card-header '>Price Details</h4>
                            <div className=' card-body'>
                                <div className='row '>
                                    <div className='col col-md-8'>
                                        <h5>Sub Total </h5>
                                        <h5>Tax </h5>
                                    </div>
                                    <div className='col col-md-4 text-end'>
                                        <h5>{cardData.total}</h5>
                                        <h6>+{(cardData.grandTotal - cardData.total).toFixed(2)}</h6>
                                    </div>
                                </div>
                                <div className='row  card-footer '>
                                    <div className='col col-md-6'>
                                        <h5>Grand Total </h5>
                                    </div>
                                    <div className='col col-md-6 text-end'>
                                        <h5>{cardData.grandTotal}</h5>
                                    </div>
                                </div>
                                <Link to='/user/address' className='btn btn-primary mt-2 ms-2'>Checkout</Link>
                            </div>
                        </div>

                    </div>

                </div>

            }
        </div>
    )
}
