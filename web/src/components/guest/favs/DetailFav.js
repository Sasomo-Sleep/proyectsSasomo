import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import service from '../../../services/sasomo-service';

const DetailFav = () => {
    const { id } = useParams()
    const [flat, setFlat] = useState()

    useEffect(() => {
        service.favDetail(id)
            .then(flat => setFlat(flat))
            .catch(err => console.error(err))
    }, [id])
    console.log(flat, "FLATU")

    if (!flat) return <> </>
    return (
        <div className="m-3">
            <div>
                <img src={flat.images} alt={flat.name} />
                <p>{flat.name}</p>
                {/*  <p>{flat.reviews}</p> */}
                <p>{ } Namecity</p>
                <hr />
            </div>
            <div className="">
                <p>Flat rented by {flat.owner.name}</p>
                <img src={flat.owner.avatar} alt={flat.owner.name} />
                <hr />
            </div>
            <div>
                <span>{flat.maxGuests} guests</span>  ·   <span>{flat.rooms} rooms</span>  ·   <span>{flat.bathroom} bathrooms</span>
                <hr />
                <p>{flat.description}</p>
            </div>
            <div>
                <p>Aqui tiene que ir el mapa de maps jeje</p>
            </div>

        </div>
    );
};

export default DetailFav;

