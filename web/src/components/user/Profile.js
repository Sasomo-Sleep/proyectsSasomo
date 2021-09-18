import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import moment from 'moment'
import './Profile.css'
import LoggedInPage from '../common/LoggedInPage';

function Profile() {
    const [visible, setVisible] = useState(false)
    const auth = useContext(AuthContext)
    if (!auth.user || !auth.user) {
        return <> </>
    }
    return (
        <LoggedInPage>
            <div className="profile1 my-3 mx-2">
            <Link to="/profile/edit"><p className=" d-flex justify-content-end"> <i className="fas fa-edit"></i></p></Link>
            <div className="me-auto d-flex top-container">
                <div className="col-6">
                    <h1 > Hi, I'm {auth.user.name}</h1>
                    <span> {auth.user.name} joins {moment(auth.user.createAt).format("MMM Do YY")}</span>
                    <p><i className="far fa-check-circle"></i> Identidad verificada</p>
                    <p><i className="far fa-comment-alt"></i>{auth.user.reviews} Reviews</p>

                </div>
                <img className="avatar img-fluid  rounded-circle me-3" src={auth.user.avatar} alt={auth.user.name} />

            </div>
            <hr />
            <div >
                <h3> About of ...</h3>
                <p> <i className="fas fa-quote-left"></i></p>
                <h6> {auth.user.about}</h6>
                <p><i className="fas fa-home"></i> Live in {auth.user.city}</p>
                <div className="app">
                    <span><i className="fas fa-comment"></i> Speak: </span>{auth.user.idioms.map(idiom => <span key={idiom}>{idiom} </span>)}
                </div>
                <hr />
            </div>

            <div >

                <h3 onClick={() => setVisible(!visible)}> {auth.user.name} confirmed  </h3>
                {visible &&
                    <div><p><i className="fas fa-check"></i> {auth.user.identyCard}</p>
                        <p><i className="fas fa-check"></i> {auth.user.email}</p>
                        <p><i className="fas fa-check"></i> {auth.user.phone}</p>
                    </div>}

                <hr />
            </div>

            <div className="profile">
                <h6>Flat of {auth.user?.name}</h6>
                {auth.user.properties.map(property => <img src={property.images[0]} alt={property.name} key={property.id} />)}

            </div>

            <div className="profile">
                <span>{'media de las reviews'}</span>
                <h3>{auth.user?.reviews?.length} reviews</h3>
            </div>
        </div>
        </LoggedInPage>
    )
}

export default Profile