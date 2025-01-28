import AddToCartBtn from "../cart/AddToCartBtn/AddToCartBtn";
import Favorite from "./Favorite";

const Product = (props) => {
    const { data, cart, addToCartHandler, removeFromCartHandler } = props;
    const { id, title, descr, price, img, isFavorite } = data;
    return (
        <div key={id} className="product">
            <h3 className="product__title">{title}</h3>
            <img className="product__img" src={`images/products/${img}.jpg`} alt="" />
            <p className="product__descr">{descr}</p>
            <p className="product__price">{price}</p>

            <div className="product__add-favorite">
                <AddToCartBtn
                    id={id}
                    cart={cart}
                    addToCartHandler={addToCartHandler}
                    removeFromCartHandler={removeFromCartHandler}
                />
                <Favorite
                    id={id}
                    isFavorite={isFavorite}
                />
            </div>
        </div>
    );
}

export default Product;