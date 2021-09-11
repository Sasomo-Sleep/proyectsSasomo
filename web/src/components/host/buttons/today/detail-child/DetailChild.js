import { useContext } from "react"
import './DetailChild.css'
import moment from 'moment'
import { Link } from "react-router-dom"
function DetailChild({ checkIn, checkOut, guest, guestsClass, property,createdAt ,id}) {

console.log(id, "id")
    const numberOfGuest = guestsClass?.reduce((amount, guestsClass) =>  guestsClass.quantity + amount, 0)
    return (
        <div>
            <div className="header m-4">
                <div className="">
                    <p>{guest.name}</p>
                    <span>{numberOfGuest} of guest</span> <span>{property.price}€ Night</span>
                    <p>{property.name}</p>
                </div>
                <div>
                    <img src={property.images[0]} alt={property.name} />
                </div>

            </div>
            <hr />
            <div>
                <p>{guest.reviews} Reviews</p>
                <p> Register at {moment(guest.createAt).format("MMM Do YY")}</p>

                <Link to={'/profile/id'}><p>Watch profile</p> </Link> 
            </div>
            <hr />
            <div className="d-flex mx-4">
                <button type="button" className="btn btn-dark">Write a Message</button>
                <button type="button" className="btn btn-dark mx-4">Call</button>
                <p>Phone {guest.phone}</p>
            </div>
            <hr />
            <p>Guest {}</p>
            <p>Check In {moment(checkIn).format('MMM Do')}</p>
            <p>Check Out {moment(checkOut).format('MMM Do')}</p>
            <p>Date of booking {moment(createdAt).format('MMM Do')}</p>
            <span>Confirmation Cod {id}</span>
            


        </div>
    )
}
export default DetailChild


/*
{guestClass.map(g => <p> {g.quantity}  </p>)}
xq no va??
{moment(checkIn).format('MMM Do')}-{moment(checkOut).format('MMM Do')}
*/