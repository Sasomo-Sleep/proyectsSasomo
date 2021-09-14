import React from 'react';
import { Link } from 'react-router-dom';
import './Footer2.css'

const Footer2 = () => {
    return (
        <div id="nav-bottom" className="">
            <div>
                <Link to="/explore"><p>Explore</p></Link>
            </div>
            <div>
                <Link to="/properties-liked"> <p>Favs</p></Link>
            </div>
            <div>
            <div>
                <Link to="/bookings"> <p>Bookings</p></Link>
            </div>
                <Link to="/profile/my-chats"> <p>Messages</p></Link> {/* hay que aclarar la ruta */} 
            </div>
            <div>
                <Link to="/guest-menu"> <p>Menu</p></Link>
            </div>
        </div>
    );
};

export default Footer2;
