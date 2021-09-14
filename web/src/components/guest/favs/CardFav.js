
import React from 'react';
import { Link } from 'react-router-dom';
import './CardFav.css'
const CardFav = ({ propertyId, id }) => {
    return (
        <Link to={`/properties/${propertyId.id}`}>
            <div className='card'>
                <img src={propertyId.images[0]} alt={propertyId.name} />
                <div className="card__info">
                    <h2>{propertyId.name}</h2>
                    <h4>{propertyId.description}</h4>
                    <h3>{propertyId.price}€ / Night</h3>
                </div>
            </div>
        </Link>
    );
};

export default CardFav;

