import React from 'react';
import moment from 'moment'
import './BookingItem.css'
import { Link } from 'react-router-dom';


const BookingItem = ({ propertyOwner, guest, checkIn, checkOut, property, id }) => { 

    return (
        <Link to={`/bookings/${id}`}>
            <div className='card'>
                <img src={propertyOwner?.properties[0]?.images[0]} alt={propertyOwner?.properties[0]?.name} />
                <div className="card__info">
                    <h4>Host: {propertyOwner?.name}</h4>
                    <span>{moment(checkIn)?.format("MMM Do YY")}</span>       <span>{moment(checkOut)?.format("MMM Do YY")}</span>
                </div>
            </div>
        </Link>
    );
};

export default BookingItem;

