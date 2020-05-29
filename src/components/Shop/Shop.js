import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (product) => {
        console.log('Product Added', product);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}>
                    </Product>)
                }

            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>
        </div>
    );
};

export default Shop;