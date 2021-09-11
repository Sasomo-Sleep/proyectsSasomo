import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../../services/sasomo-service';
import DetailChild from './detail-child/DetailChild';

const Detail = (props) => {
    const { id } = useParams()
    const [booking, setBooking] = useState()

    useEffect(() => {
        service.bookingDetail(id)
            .then(booking => setBooking(booking))
            .catch(console.error)
    }, [id])
    console.log(booking, "heey")
    if (!booking) return <> </>
    return (
        <div>
            
           {booking.map(b =>
            <DetailChild   key={b.id} {...b}/>
           )}
        </div>
    );
};

export default Detail;