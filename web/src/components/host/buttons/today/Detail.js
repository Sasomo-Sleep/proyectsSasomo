import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../../services/sasomo-service';

const Detail = (props) => {
    const { id } = useParams()
    const [booking, setBooking] = useState()
    
    useEffect(() => {
        service.bookingDetail(id)
            .then(booking => setBooking(booking))
            .catch(console.error)
    }, [id])

    return (
        <div>
            
        </div>
    );
};

export default Detail;