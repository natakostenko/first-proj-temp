import AddToCartBtn from "../cart/AddToCartBtn/AddToCartBtn";

const Product = (props) => {
    const { data, cart, addToCartHandler, removeFromCartHandler } = props;
    const { id, title, descr, price, sale, img } = data;
    return (
        <div key={id} className="product">
            <h3 className="product__title">{title}</h3>
            <img className="product__img" src={`images/products/${img}.jpg`} alt="" />
            <p className="product__descr">{descr}</p>
            <p className="product__price">{price}</p>

            <AddToCartBtn
                id={id}
                cart={cart}
                addToCartHandler={addToCartHandler}
                removeFromCartHandler={removeFromCartHandler}
            />
        </div>
    );
}

export default Product;