
import React, { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import service from '../../services/sasomo-service';
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext';

function Profile() {
    
     const auth = useContext(AuthContext)

    return (
        <div className="profile">
            <div>
                <h1> Hi, I'm {auth.user?.name}</h1>
                <span> {'name'} {'fecha'}</span>
                <p>Identidad verificada</p>
                <p> {'number of'} reviews</p>
            </div>
            <div>
                <img src={'jeje'} alt={'context.name'} />
            </div>

            <div className="profile">
                <h3> About of ...</h3>
                <p> {'context.description'}</p>
                <p> Live in {'context.city'}</p>
                <p> Speak {'idioms'}</p>
            </div>

            <div className="profile">
                <h3> {auth.user?.name} </h3>
                <p> Identity</p>
                <p> Email</p>
                <p> Number Phone</p>
            </div>

            <div className="profile">
                <h3>{'name'}'s announcement</h3>
                <img src={'context.avatar'} alt={'name.property'}/>
                <span>{'media de las reviews'}</span>
            </div>

            <div className="profile">
                <h3>{'number reviews'} reviews</h3>
            </div>
        </div>
    )
}

export default Profile