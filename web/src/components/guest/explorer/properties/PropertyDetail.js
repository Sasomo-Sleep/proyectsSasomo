import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';
import './PropertyDetail.css'
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
                <span>{flat.maxGuests} guests</span>  ·   <span>{flat.rooms} rooms</span>  ·   <span>{flat.bathroom} bathrooms</span>
                <hr />
                <p>{flat.description}</p>
            </div>
            <hr />
            
            <div>
                <p>Aqui tiene que ir el mapa de maps jeje</p>
            </div>

        </div>
    );
};

export default PropertyDetail;

