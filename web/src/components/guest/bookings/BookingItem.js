import React from 'react';
import moment from 'moment'
import './BookingItem.css'
import { Link } from 'react-router-dom';


const BookingItem = ({ propertyOwner, checkIn, checkOut, id }) => {

    return (
        <Link to={`/bookings/${id}`}>
            <div className='card-booking'>
                <img src={propertyOwner?.properties[0]?.images[0]} alt={propertyOwner?.properties[0]?.name} />
                <div className="card-booking__info">
                    <h4>Host: {propertyOwner?.name}</h4>
                    <span>{moment(checkIn)?.format("ll")}</span> | <span>{moment(checkOut)?.format("ll")}</span>
                </div>
            </div>
        </Link>
    );
};

export default BookingItem;

