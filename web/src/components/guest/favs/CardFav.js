
import React from 'react';
import { Link } from 'react-router-dom';
import './CardFav.css'
const CardFav = ({ propertyId }) => {
    return (
        <Link to={`/properties/${propertyId?.id}`}>
            <div className='cardd'>
                <img src={propertyId?.images[0]} alt={propertyId?.name} />
                <div className="cardd__info">
                    <h2>{propertyId?.name}</h2>
                    <h4>{propertyId?.description}</h4>
                    <h3>{propertyId?.price}€ / Night <i className="far fa-heart"></i></h3>
                </div>
            </div>
        </Link>
    );
};

export default CardFav;

