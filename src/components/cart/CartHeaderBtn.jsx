import { useState } from "react";
import { config } from "../../../config";

const CartHeaderBtn = (props) => {
    const { data } = props;
    const { baseUrl, resources } = config;
    const url = `${baseUrl}/${resources.products}`;

    const [cartProducts, setCartProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    let index = 1;

    const clickCartBtnHandler = () => {
        data.forEach(async (id) => {
            const res = await fetch(`${url}/${id}`);
            const product = await res.json();

            let includesProduct = false;

            cartProducts.forEach(item => {
                if (item.id === product.id) {
                    includesProduct = true;
                }
            });

            if (!includesProduct) {
                setCartProducts(prev => [...prev, product]);
            }
        });

        setIsCartVisible(true);
    }

    const closeCartHandler = () => {
        setIsCartVisible(false);
    };

    return (
        <>
            <button
                className="cart-header-btn"
                onClick={clickCartBtnHandler}
            >
                <img className="cart-header-btn__icon" src="images/icons/cart.png" alt="" />
                <span className="cart-header-btn__value">
                    {data.length}
                </span>
            </button>
            {isCartVisible && (
                <div className="cart-overlay">
                    <div className="cart-modal">
                        <button className="close-btn" onClick={closeCartHandler}>
                            ✖
                        </button>
                        <h2>Your Cart</h2>
                        {cartProducts.length === 0 ? (
                            <p>Your cart is empty!</p>
                        ) : (
                            <>
                            <ul>
                                {cartProducts.map((product, index) => (
                                    <li key={product.id}>
                                        <h3>{index + 1}. {product.title}</h3>
                                        <p>Price: ${product.price}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-summary">
                                <h3>Total: ${cartProducts.reduce((total, product) => total + product.price, 0).toFixed(2)}</h3>
                            </div>
                        </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default CartHeaderBtn;