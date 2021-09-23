import './DetailChild.css'
import moment from 'moment'
import { Link } from "react-router-dom"
import { useState } from 'react';
import LoggedInPage from '../../../../common/LoggedInPage';
import './DetailChild.css'
function DetailChild({ checkIn, checkOut, guest, guestsClass, property, createdAt, id }) {
    const [visible, setVisible] = useState(false)

    const numberOfGuest = guestsClass?.reduce((amount, guestsClass) => guestsClass.quantity + amount, 0)
    return (
        <LoggedInPage>
            <div>
                <div className="header m-4">
                    <div className="guest-info">
                        <h6>{guest.name}</h6>
                        <span>{numberOfGuest} guest</span> <span>{property.price}€ Night</span>
                        <p>{property.name}</p>
                    </div>
                    <div>
                        <img src={guest.avatar} alt={property.name} />
                    </div>
                </div>
                <hr />
                <div className="m-2 mx-4">
                    <p><i className="fas fa-star"></i>{guest.reviews} Reviews</p>
                    <p><i className="fab fa-airbnb"></i> Register at {moment(guest.createAt).format("MMM Do YY")}</p>

                    <Link to={'/profile/id'}><p>Watch profile</p> </Link>
                </div>
                <hr />
                <div className="d-flex mx-4 buttons-container">
                    <button type="button" className="btn btn-dark">Write a Message</button>
                    <button type="button" className="btn btn-dark mx-4" onClick={() => setVisible(!visible)}>Call</button>
                    {visible && <p>Phone {guest.phone}</p>}
                </div>
                <hr />
                <div className="m-4 d-flex">

                    <ul className='list-container'>
                        <li ><span>Guest</span> <span>{numberOfGuest}</span></li>

                        <li> <span>Check In</span>{moment(checkIn).format('MMM Do')}</li>

                        <li>Check Out <span></span>{moment(checkOut).format('MMM Do')}</li>

                        <li>Date of booking<span></span> {moment(createdAt).format('MMM Do')}</li>

                    </ul>
                </div>

            </div>
        </LoggedInPage>
    )
}
export default DetailChild


