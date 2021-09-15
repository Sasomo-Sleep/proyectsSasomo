
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';
import moment from 'moment'
import './BookingDetail.css'
const BookingDetail = () => {

    const { id } = useParams()
    const [booking, setBooking] = useState()

    useEffect(() => {
        service.bookDetail(id)
            .then(booking => setBooking(booking))
            .catch(console.error)
    }, [id])

    if (!booking) return <> </>
    return (
        <div className="m-4 book-detail">
            <div>
                <span>{moment(booking?.checkIn).format('LL')}</span> - <span>{moment(booking?.checkOut).format('LL')}</span>

                <h1>Your stay at {booking?.propertyOwner.name}'s home</h1>
                <hr />
            </div>
            <div>
                <img src={booking?.propertyOwner.properties[0].images} alt={booking?.propertyOwner.properties[0].name} />
                <p>{booking?.propertyOwner.properties[0].name}</p>
                <hr />
            </div>
            <div className="box">
                <div>
                    <p>Chek-in</p>
                    <span>{moment(booking?.checkIn).format('dddd').slice(0, 3)}</span>, <span>{moment(booking?.checkIn).format('LL')}</span>
                </div>
                <div>
                    <p>Chek-out</p>
                    <span>{moment(booking?.checkOut).format('dddd').slice(0, 3)}</span>, <span>{moment(booking?.checkOut).format('LL')}</span>
                </div>
            </div>
            <hr />
            <div>
                <p>How to arrive</p>
                <p>mapa aquiii!</p>
            </div>
            <hr />

            <div className="d-flex">
                <div className="d-flex-column">
                    <p>Host: {booking?.propertyOwner?.name}</p>
                    <p>About your Host </p>
                    <p>{booking?.propertyOwner?.about}</p>
                </div>
                <img src={booking?.propertyOwner?.avatar} alt={booking?.propertyOwner?.name} />
            </div>

        </div>
    );
};

export default BookingDetail;
