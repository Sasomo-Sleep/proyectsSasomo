import React, { useEffect, useState } from 'react';
import service from '../../../services/sasomo-service';
import BookingItem from './BookingItem';

const BookingsList = () => {

    const [bookings, setBookings] = useState()

    useEffect(() => {
        service.allBokings()
            .then(bookings => setBookings(bookings))
            .catch(console.error)
    }, [])

    console.log(bookings, "boooko")
    if (!bookings) return <> </>
    return (
        <div>
            {bookings.map(booking => 
                <BookingItem   {...booking} key={booking.id}/>
            )}
        </div>
    );
};

export default BookingsList;