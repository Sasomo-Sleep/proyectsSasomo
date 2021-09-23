import React, { useEffect, useState } from 'react';
import service from '../../../services/sasomo-service';
import LoggedInPage from '../../common/LoggedInPage';
import BookingItem from './BookingItem';

const BookingsList = () => {

    const [bookings, setBookings] = useState()

    useEffect(() => {
        service.allBokings()
            .then(bookings => setBookings(bookings))
            .catch(console.error)
    }, [])

    if (!bookings) return <> </>
    return (
        <LoggedInPage>
            <div className="m-3">
                <h1>Where you have been!</h1>
                {bookings?.map(booking =>
                    <BookingItem   {...booking} key={booking?.id} />
                )}
            </div>
        </LoggedInPage>
    );
};

export default BookingsList;