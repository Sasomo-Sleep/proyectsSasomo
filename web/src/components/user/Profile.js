import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import moment from 'moment'
import './Profile.css'

function Profile() {
    
    const auth = useContext(AuthContext)
    if (!auth.user || !auth.user) {
        return <> </>
    }
    return (
        <div className="profile1 my-5 mx-2">
                <Link to="/profile/edit"><p className=" d-flex justify-content-end"> edit</p></Link>
            <div className="me-auto d-flex ">
                <div className="col-6">
                    <h1 > Hi, I'm {auth.user.name}</h1>
                    <span> {auth.user.name} joins {moment(auth.user.createAt).format("MMM Do YY")}</span>
                    <p> Identidad verificada</p>
                    <p> {auth.user.reviews} Reviews</p>

                    <hr />
                </div>

                <div className="col-4">
                    <img className="avatar align-self-start img-fluid  rounded-circle me-3" src={auth.user.avatar} alt={auth.user.name} />
                </div>
            </div>
            <div className="profile">
                <h3> About of ...</h3>
                <p> <i className="fas fa-quote-left"></i></p>
                <h6> {auth.user.about}</h6>
                <p> Live in {auth.user.city}</p>
                <div className="app">
                    {auth.user.idioms.map(idiom => <span key={idiom}>{idiom}</span>)}
                </div>
                <hr />
            </div>

            <div className="profile">

                <h3> {auth.user.name} confirmed  </h3>
                <p> {auth.user.identyCard}</p>
                <p> {auth.user.email}</p>
                <p>{auth.user.phone}</p>
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