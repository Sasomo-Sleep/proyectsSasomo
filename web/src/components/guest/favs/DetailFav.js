import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';
import LoggedInPage from '../../common/LoggedInPage';
import "./DetailFav.css"
import { useHistory } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

const DetailFav = () => {
    const { id } = useParams()
    const [flat, setFlat] = useState()
    const history = useHistory()



    function fetchFlats() {
        service.favDetail(id)
            .then(flat => setFlat(flat))
            .catch(err => console.error(err))
    }

    function handleCreateBooking() {
        service.createBooking(id)
            .then(booking => history.push('/bookings'))
            .catch(console.erro)
    }

    useEffect(() => {
        fetchFlats()
    }, [id])

    if (!flat) return <> </>
    return (
        <LoggedInPage>
            <>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => history.push('/properties-liked')}>
                </NavBar>
                <div className="m-3">
                    <div className="title-container">
                        <img src={flat.images} alt={flat.name} />

                        <h6>{flat.name}</h6>
                        {/*  <p>{flat.reviews}</p> */}
                        <p>{flat.owner.city}</p>
                        <hr />
                    </div>
                    <div className="flat-description">
                        <h6>Flat rented by {flat.owner.name}</h6>
                        <img src={flat.owner.avatar} alt={flat.owner.name} />

                    </div>
                    <div>
                        <span>{flat.rooms} rooms</span>  ·   <span>{flat.bathroom} bathrooms</span>
                        <hr />
                        <p>{flat.description}</p>
                    </div>
                    <hr />

                    <div>
                        <p>Aqui tiene que ir el mapa de maps jeje</p>
                        <button className="btn btn-dark" onClick={handleCreateBooking}>Do the booking!</button>
                        <p>Aqui tiene que ir el mapa de maps jeje</p>

                    </div>
                </div>
            </>
        </LoggedInPage>
    );
};

export default DetailFav;

