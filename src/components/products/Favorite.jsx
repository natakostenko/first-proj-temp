import { config } from '../../../config';
import { useAuthContext } from '../../context/auth/useAuthContext';

const Favorite = (props) => {
    const { id, isFavorite } = props;

    const context = useAuthContext();
    const { user } = context.stateData;

    if (!user) return (
        <img src={"images/icons/not-is-favorite.png"} alt=""
            className="favorite-img"
        />
    );

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

    }

    return (
        <img src={isFavoriteImg} alt=""
            className="favorite-img"
            onClick={() => toggleFavoriteProduct(id, isFavorite)}
        />
    );
}

export default Favorite;