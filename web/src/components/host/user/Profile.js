
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';
import moment from 'moment'
import './Profile.css'
function Profile() {

    const auth = useContext(AuthContext)
    if (!auth.user || !auth.user.profile) {
        return <> </>
    }
    return (
        <div className="profile1 my-5 mx-2">
            <div className="me-auto d-flex ">

                <div className="col-6">
                    <h1 > Hi, I'm {auth.user.profile.name}</h1>
                    <span> {auth.user.profile.name} joins {moment(auth.user.profile.createAt).format("MMM Do YY")}</span>
                    <p> Identidad verificada</p>
                    <p> {auth.user.profile.reviews} Reviews</p>

                    <hr />
                </div>

                <div className="col-4">
                    <img className="avatar align-self-start img-fluid  rounded-circle me-3" src="/images/payaso.jpeg" alt={auth.user.profile.name} />
                </div>
            </div>
            <div className="profile">
                <h3> About of ...</h3>
                <p> <i className="fas fa-quote-left"></i></p>
                <h6> {auth.user.profile.about}</h6>
                <p> Live in {auth.user.profile.city}</p>
                {auth.user.profile.idioms.map(idiom => <span key={idiom}>{idiom}</span>)}
                <hr />
            </div>

            <div className="profile">

                <h3> {auth.user.profile.name} confirmed  </h3>
                <p> {auth.user.profile.identyCard}</p>
                <p> {auth.user.profile.email}</p>
                <p>{auth.user.profile.phone}</p>
                <hr />
            </div>

            <div className="profile">
                {auth.user.properties.map(property => <h3 key={property.id}> {property.name} </h3>)}
                <span>{'media de las reviews'}</span>
            </div>

            <div className="profile">
                <h3>{auth.user?.reviews?.length} reviews</h3>
            </div>
        </div>
    )
}

export default Profile