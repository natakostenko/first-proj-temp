import { useEffect, useState } from 'react';
import { config } from '../../../config';
import Product from './Product';

const ProductsList = (props) => {
    const { cart, addToCartHandler, removeFromCartHandler } = props;

    const { baseUrl, resources } = config;
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/${resources.products}`);
            const data = await res.json();
            setData(data);
        })();
    }, [data]);
    
    return (
        <div className="products">

            {
                !data.length
                    ? <p>No data ...</p>
                    : data.map(item => (
                        <Product 
                        key={item.id} 
                        data={item}
                        addToCartHandler={addToCartHandler}
                        removeFromCartHandler={removeFromCartHandler}
                        cart={cart}
                        />
                    ))
            }

        </div>
    );
}

export default ProductsList;