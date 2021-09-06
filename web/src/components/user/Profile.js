
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import service from '../../services/sasomo-service';
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext';

function Profile() {

    const auth = useContext(AuthContext)
    console.log("HEREEEE", auth)
    if (auth.user === undefined) {
        return <p>Mamahuevo</p>
    }
    return (
        <div className="profile">
            <div>
                <h1> Hi, I'm {auth.user.profile?.name}</h1>
                <span> {auth.user.profile?.name} {'cuando se unió'}</span>
                <p>Identidad verificada</p>
                <p> {auth.user.profile?.reviews} Reviews</p>
            </div>
            <div>
                <img src="/images/payaso.jpeg" alt={auth.user.profile?.name} />
            </div>

            <div className="user.profile">
                <h3> About of ...</h3>
                <p> {auth.user.profile?.about}</p>
                <p> Live in {auth.user.profile?.city}</p>
                <p> Speak {auth.user.profile?.idioms}</p>
            </div>

            <div className="profile">
            {auth.user.properties.map(property => <h3 key={property.id}> {property.name} </h3>)}
                <h3> {auth.user.profile?.name} </h3>
                <p> Identity</p>
                <p> Email</p>
                <p> Number Phone</p>
            </div>

            <div className="profile">
                <span>{'media de las reviews'}</span>
            </div>

            <div className="profile">
                <h3>{auth.user?.reviews?.length} reviews</h3>
            </div>
        </div>
    )
}

export default Profile