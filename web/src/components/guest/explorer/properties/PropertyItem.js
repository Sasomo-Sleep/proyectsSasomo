import {Link} from 'react-router-dom'
import React from 'react';
import './PropertyItem.css'
const PropertyItem = ({ name, images, price, id }) => {


    return (
        <Link to={`/properties/${id}`}>
        <div className='card'>
            <img src={images[0]} alt={name} />
            <div className="card__info">
                <h6>{name}</h6>
                <p>{price}€ / Night <i className="far fa-heart"></i></p>
            </div>
        </div>
    </Link>
    );
};

export default PropertyItem;