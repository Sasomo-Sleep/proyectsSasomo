import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './PropertyItem.css'
import service from '../../../../services/sasomo-service';


const PropertyItem = ({ name, images, price, id }) => {

    const [isLiked, setLike] = useState()

    useEffect(() => {
        service.getLike(id)
            .then(like => setLike(like.length > 0))
            .catch(console.error)
    }, [id])

    function handleLikeClicked() {
        if (isLiked) {
            service.deleteLike(id)
                .then(() => setLike(false))
                .catch(console.error)
        } else {
            service.createLike(id)
                .then(() => setLike(true))
                .catch(console.error)
        }
    }

    return (
        <div className='card'>
            <Link to={`/properties/${id}`}> <img className='card-img' src={images[0]} alt={name} /></Link>
            <div className="card__info">
                <h6>{name}</h6>
                <p>{price}€ / Night  <i className={`${isLiked ? "fas" : "far"} fa-heart`} onClick={handleLikeClicked}></i></p>
            </div>
        </div>
    );
};

export default PropertyItem;
