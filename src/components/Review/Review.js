import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     // cart
    //     const savedCart = getDatabaseCart();
    //     const productKeys = object.keys(savedCart);

    //     const cartProducts = productKeys.map( key =>{
    //         const product = fakeData.find( pd => pd.key === key);
    //         product.quantity = savedCart [key];
    //         return product;

    //     });
    //     setCart(cartProducts);
    // },[])
    return (
        <div>
            <h3>Cart Item: </h3>
        </div>
    );
};

export default Review;