import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import './MenuGuest.css'

const MenuGuest = () => {

    const auth = useContext(AuthContext)
    if (!auth.user) return <> </>

    return (
        <div>
            <div className="menu-guest">
                <div className="hight-panel m-4">
                    <div className="panel">
                        <img src={auth?.user?.avatar} alt={auth?.user?.name} className="avatar align-self-start  w-100 rounded-circle me-3" />
                        <Link to={'/profile'} >Watch profile</Link>
                    </div>
                    <div className="my-3 mx-3">
                        <h1>{auth.user.name}</h1>
                    </div>
                </div>
                <hr id="one" />
            </div>

            <div className="m-4 ">
                <div>
                    <p>ACOUNT SETTINGS</p>
                    <div className="me-auto d-flex">
                        <span>Personal Information</span>
                        <i className="far fa-user"></i>
                    </div>
                    <hr className="hr-main" />
                    <div className="me-auto d-flex">
                        <span>Payments and Collections</span>
                        <i className="fab fa-cc-paypal"></i>
                    </div>
                    <hr className="hr-main" />
                    <div className="me-auto d-flex">
                        <span>Notifications</span>
                        <i className="fas fa-bell"></i>
                    </div>
                    <hr className="hr-main" />
                </div>
            </div>

            <div className="m-4 ">
                <span>HOST</span>
                <div className="me-auto d-flex">
                    <span>Use as Host</span>
                    <i className="fas fa-arrows-alt-h"></i>
                </div>
                <hr className="hr-main" />
                <div className="me-auto d-flex">
                    <span>Offer an Experience</span>
                    <i className="fas fa-campground"></i>
                </div>
                <hr className="hr-main" />
            </div>


        </div>
    );
};

export default MenuGuest;