import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
     console.log(props.product.key);
    const { img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
             <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by:</small>{seller}</p>
                <p>${price}</p>
                <p><small>Only{stock} left in stock - Order soon</small></p>
                <button
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart
                     </button>
            </div>


        </div>
    );
};

export default Product;