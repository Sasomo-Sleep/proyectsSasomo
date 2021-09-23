
import React from 'react';
import { Link } from 'react-router-dom';
import './CardFav.css'
const CardFav = ({ propertyId }) => {
    return (
        <Link to={`/properties/${propertyId?.id}`}>
            <div className='fav'>
                <img src={propertyId?.images[0]} alt={propertyId?.name} />
                <div className="fav__info">
                    <h6>{propertyId?.name}</h6>
                    <p>{propertyId?.price}€ / Night <i className="far fa-heart"></i></p>
                </div>
            </div>
        </Link>
    );
};

export default CardFav;

