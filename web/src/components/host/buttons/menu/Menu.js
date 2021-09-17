import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import './Menu.css'
import service from '../../../../services/sasomo-service';
import DetailFav from '../../../guest/favs/DetailFav';

function Menu() {

    const auth = useContext(AuthContext)

    function handleLogout() {
        service.logout()
            .then(() => {
                auth.logout()
            })
            .catch(err => console.error(err))
    }
    if (!auth.user) {
        return <> </>
    }
    return (
        <div className="menu ">
            <div className="">
                <h1>Menu</h1>
            </div>

            <span >HOST</span>
            <div className="advert">
                {auth.user.properties.map(property => <img src={property.images[0]} alt={property.id} key={property.id} />)}
                {auth.user.properties.map(property => <h4 key={property.id}> {property.name} </h4>)}
            </div>
            <div className="mt-3 options-container my-3 mx-2">
            <div className="option">
            <p><i className="fas fa-book-open"></i> Guides</p>
            <i className="fas fa-arrow-right"></i>
            </div>
            <div className="option">
            <Link to="/properties"><p><i className="fas fa-home"></i> Create a new room advertisement</p></Link>
            <i className="fas fa-arrow-right"></i>
            </div>
            <div className="option">
            <p><i className="fas fa-campground"></i> Offer a new experience </p>
            <i className="fas fa-arrow-right"></i>
            </div> 
                
                
            </div>
            <hr  />
            <div className="my-3 mx-2">

                <span >ACCOUNT</span>
                <div className="cuenta">
                <div style={{display: "flex"}}><img className="avatar align-self-start imgg-fluid  rounded-circle me-3" src={auth.user?.avatar} alt={auth.user?.name} />
                    <Link to="/profile"><p> Your profile </p></Link></div>
                    
                    <i className="arrow fas fa-arrow-right"></i>
                </div>


                <p>Configuration</p>
                <hr />
            </div>

            <button onClick={() => auth.setGuest(true)}> Use as guest</button>
            <button onClick={handleLogout}> Log Out</button>
        </div>
    )
}

export default Menu

