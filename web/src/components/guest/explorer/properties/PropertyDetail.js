/* import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';
import './PropertyDetail.css'
import LoggedInPage from '../../../common/LoggedInPage';

const PropertyDetail = () => {
    const { id } = useParams()
    const [flat, setFlat] = useState()

    useEffect(() => {
        service.favDetail(id)
            .then(flat => setFlat(flat))
            .catch(err => console.error(err))
    }, [id])

    if (!flat) return <> </>
    return (
        <LoggedInPage>
            <div className="m-3">
                <div className="title-container">
                    <img src={flat.images} alt={flat.name} />

                    <h6>{flat.name}</h6>
                    <p>{flat.owner.city}</p>
                    <hr />
                </div>
                <div className="flat-description">
                    <h6>Flat rented by {flat.owner.name}</h6>
                    <img src={flat.owner.avatar} alt={flat.owner.name} />

                </div>
                <div>
                    <span>{flat.maxGuests} </span>  ·   <span>{flat.rooms} rooms</span>  ·   <span>{flat.bathroom} bathrooms</span>
                    <hr />
                    <p>{flat.description}</p>
                </div>
                <hr />

                <div>
                    <p>Aqui tiene que ir el mapa de maps jejee</p>
                </div>

            </div>
        </LoggedInPage>
    );

};

export default PropertyDetail; */

/* 

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';
import './PropertyDetail.css'
import LoggedInPage from '../../../common/LoggedInPage';
import { useHistory } from 'react-router-dom';

const PropertyDetail = () => {
    console.log('aquitoy')
    const { id } = useParams()
    const [flat, setFlat] = useState()
    const history = useHistory()
    function fetchFlats() {
        service.favDetail(id)
            .then(flat => setFlat(flat))
            .catch(err => console.error(err))
    }
    function handleCreateBooking() {
        service.createBooking()
            .then(booking => history.push('/bookings'))
            .catch(console.erro)
    }
    useEffect(() => {
        fetchFlats()
    }, [id])

    if (!flat) return <> </>
    return (
            <div className="m-3">
                <div className="title-container">
                    <img src={flat.images} alt={flat.name} />

                    <h6>{flat.name}</h6>
                    <p>{flat.owner.city}</p>
                    <hr />
                </div>
                <div className="flat-description">
                    <h6>Flat rented by {flat.owner.name}</h6>
                    <img src={flat.owner.avatar} alt={flat.owner.name} />

                </div>
                <div>
                    <span>{flat.maxGuests} </span>  ·   <span>{flat.rooms} rooms</span>  ·   <span>{flat.bathroom} bathrooms</span>
                    <hr />
                    <p>{flat.description}</p>
                </div>
                <hr />

                

                <div>
                <p onClick={handleCreateBooking}>Do the booking!</p>
                    <p>Aqui tiene que ir el mapa de maps jeje</p>
                </div>

            </div>
    );

};

export default PropertyDetail;


 */