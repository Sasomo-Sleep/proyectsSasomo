import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../../services/sasomo-service';
import DetailChild from './detail-child/DetailChild';
import { NavBar, Icon } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

const Detail = (props) => {
    const { id } = useParams()
    const [booking, setBooking] = useState()
    const history = useHistory()
    useEffect(() => {
        service.bookingDetail(id)
            .then(booking => setBooking(booking))
            .catch(console.error)
    }, [id])
    console.log(booking, "heey")
    if (!booking) return <> </>
    return (
        <>
             <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push('/today')}>
                </NavBar>
            <div>
                {booking.map(b =>
                    <DetailChild key={b.id} {...b} />
                )}
            </div>
        </>
    );
};

export default Detail;