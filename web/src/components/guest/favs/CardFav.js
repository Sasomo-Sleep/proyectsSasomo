
import React from 'react';
import { Link } from 'react-router-dom';
import './CardFav.css'
const CardFav = ({ propertyId }) => {
    return (
        <Link to={`/properties/${propertyId?.id}`}>
            <div className='card-fav'>
                <img src={propertyId?.images[0]} alt={propertyId?.name} />
                <div className="card-fav__info">
                    <h6>{propertyId?.name}</h6>
                    <p>{propertyId?.price}€ / Night </p>
                </div>
            </div>
        </Link>
    );
};

export default CardFav;

