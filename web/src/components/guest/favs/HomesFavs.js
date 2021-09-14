import React, { useState, useEffect } from 'react';
import service from '../../../services/sasomo-service';
import CardFav from './CardFav';

const HomesFavs = () => {

    const [flats, setFlats] = useState()

    useEffect(() => {
        service.homeFavs()
            .then(flats => setFlats(flats))
            .catch(err => console.error(err))
    }, [])
    console.log(flats, "HOLIS")
    if (!flats) return <> </>
    return (
        <div>
            {flats.map(flat => 
                <CardFav  {...flat} key={flat.id} />
            )}
            
        </div>
    );
};

export default HomesFavs;