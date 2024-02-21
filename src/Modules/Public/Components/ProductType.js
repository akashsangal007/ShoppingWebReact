import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductType = () => {
    const [productType, setproductType] = useState([])
    useEffect(() => {
        doSomething();
    }, [])

    const doSomething = async () => {
        await fetch("https://localhost:7036/api/ProductType")
            .then(res => res.json())
            .then(data => setproductType(data))
            .then(data => console.log(productType))
            .catch(error => console.error(error));

    }
    return (
        <div>
            <h6>Shop by Category</h6>
            <div className="list-group">
                <Link to='/' className="list-group-item list-group-item-action">All Items</Link>
                {productType.map(function (productType) {
                    return (
                        <Link key={productType.ProductTypeId} to={`/productType/${productType.ProductTypeId}`} className="list-group-item list-group-item-action">{productType.ProductTypeName}</Link>
                    )
                })}

            </div>

        </div>
    )
}

export default ProductType