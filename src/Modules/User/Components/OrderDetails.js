import axios from 'axios';
import React, {useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const OrderDetails = () => {
    const [orderId, setOrderId] = useState('');
    const navigate = useNavigate()
    const loggedInUser = useSelector(state => state.user.user)
    const cardData = useSelector(state => state.cart.cart)


    const createOrder = async (e) => {
        await console.log('fired')
        e.preventDefault();
        var address = JSON.parse(localStorage.getItem('order_address'));
        await console.log('fired', address.Street)
        try {
            let body = {
                amount: Math.ceil(cardData.grandTotal) * 100,
                currency: 'INR',
                userId: loggedInUser.userId,
                street: address.Street,
                city: address.City,
                zipCode: address.ZipCode,
                phoneNo: address.Phone,
                locality: address.Locality,
                cartId: cardData.cartId
            }
            await console.log('fired', body)
            const response = await axios.post('https://localhost:7036/api/Razorpay/create-order', body).then(r => setOrderId(r.data));

            await handleRazorpayPayment(orderId,address);

        } catch (error) {
            console.error('Error creating order:', error);
        }
    };
    const handleRazorpayPayment = (orderId,address) => {
        const options = {
            key: 'rzp_test_ExN54IUWHhpMMn', // Replace with your Razorpay key
            amount: Math.ceil(cardData.grandTotal) *100, // The amount is in paise (convert rupees to paise)
            currency: 'INR',
            name: 'Leeza Fashions',
            description: `Payment for order: ${orderId}`,
            order_id: orderId,
            handler: function (response) {
                console.log(response)
                navigate(`/user/order/${orderId}`)

            },
            prefill: {
                name: loggedInUser.userName,
                email: loggedInUser.email,
                contact: loggedInUser.phoneNo,
            },
            notes: {
                address: 'Your Address',
            },
            theme: {
                color: address,
            },
        };
        console.log("jkdfksdbfjsk", orderId)
        const rzp = new window.Razorpay(options);
        rzp.open();

    };
    return (
        <div className=' container'>
            <div className=' row '>
                <h1 className='mt-2'>Order Details</h1>
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
                                                <div className='col col-md-2 '>
                                                    <img className=" card-img" src={item.imageUrl} alt="Card image cap" />
                                                </div>
                                                <div className='col col-md-10 '>
                                                    <h5>{item.productName}</h5>
                                                    <p>{item.description}</p>
                                                    <h4>Price : {item.price}₹</h4>

                                                    <ul className="list-group list-group-horizontal justify-content-end " >
                                                        <li className="list-group-item text-bg-success">{item.quantity}</li>
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
                                <button onClick={createOrder} className='btn btn-primary mt-2 ms-2'>Place Order</button>
                            </div>
                        </div>

                    </div>

                </div>

            }
        </div>
    )
}
