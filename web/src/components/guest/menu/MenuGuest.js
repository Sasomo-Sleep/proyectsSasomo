/* import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'

const MenuGuest = () => {

    const auth = useContext(AuthContext)
     if (!auth.user) return <> </>
    return (
        <div>
            <div>
                <img src={auth?.user?.avatar} alt={auth?.user?.name} />
            </div>
            <div>
                <p>{auth.user.name}</p>
                <Link to={'/profile'}>Watch profile</Link>
            </div>

        </div>
    );
};

export default MenuGuest; */