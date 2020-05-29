import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState(first10);
  
    return (
        <div>
            <h3>This is Shop</h3>
            <h3>Product length:{products.length}</h3>

            <ul>
                {
                    products.map (pd =><li>{pd.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Shop;