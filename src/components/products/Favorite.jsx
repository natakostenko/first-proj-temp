import { useEffect } from 'react';
import { config } from '../../../config';

const Favorite = (props) => {
    const { id, isFavorite } = props;

    const { baseUrl, resources } = config;

    const isFavoriteImg = isFavorite
        ? "images/icons/is-favorite.png"
        : "images/icons/not-is-favorite.png";

    const toggleFavoriteProduct = async (id, isFavorite) => {

        const response = await fetch(`${baseUrl}/${resources.products}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                isFavorite: !isFavorite,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const result = await response.json();

        console.log(result);
    }

    return (
        <img src={isFavoriteImg} alt=""
            className="favorite-img"
            onClick={() => toggleFavoriteProduct(id, isFavorite)}
        />
    );
}

export default Favorite;