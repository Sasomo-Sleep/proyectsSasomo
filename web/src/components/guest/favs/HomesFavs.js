import React, { useState, useEffect } from 'react';
import service from '../../../services/sasomo-service';
import LoggedInPage from '../../common/LoggedInPage';
import CardFav from './CardFav';

const HomesFavs = () => {

    const [flats, setFlats] = useState()

    useEffect(() => {
        service.homeFavs()
            .then(flats => setFlats(flats))
            .catch(err => console.error(err))
    }, [])

    if (!flats) return <> </>
    return (
        <LoggedInPage>
            <div>
                <h1 className="mx-4">Homes You liked</h1>
                {flats.map(flat =>
                    <CardFav  {...flat} key={flat.id} />
                )}
            </div>
        </LoggedInPage>
    );
};

export default HomesFavs;