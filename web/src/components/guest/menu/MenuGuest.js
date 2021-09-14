import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'

const MenuGuest = () => {

    const auth = useContext(AuthContext)
    if (!auth.user) return <> </>
    return (
        <div>
            <div className="m-4 row">
                <div >
                    <img src={auth?.user?.avatar} alt={auth?.user?.name} />
                </div>
                <div>
                    <p>{auth.user.name}</p>
                    <Link to={'/profile'}>Watch profile</Link>
                </div>
                <hr />
            </div>
            <div className="m-4 row">
                <span>ACOUNT SETTINGS</span>
                <div>
                    <p>Personal Information</p>

                </div>
                <div>
                    <p>Payments and Collections</p>

                </div>
                <div>
                    <p>Personal Information</p>

                </div>
            </div>
            <div className="m-4 row">
                <span>GUEST</span>
                <div>
                    <p>Use as Host</p>
                </div>
                <div>
                    <p>Offer an Experience</p>
                </div>
            </div>


        </div>
    );
};

export default MenuGuest;