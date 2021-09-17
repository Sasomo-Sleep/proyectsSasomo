import './Today.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

function Card({ guest, checkIn, checkOut, id, property }) {
    return (

        <Link to={`/detail/${id}`}>
            <div className="cardToday">
                <div>
                    <p>{property.name}</p>
                    <div className="name-container m-3">
                        <h6>{guest.name}</h6>
                        <p>{moment(checkIn).format('MMM Do')}-{moment(checkOut).format('MMM Do')}</p>
                    </div>
                </div>
                <div className="img-container ">
                    <img src={guest.avatar} alt={guest.avatar} />

                </div>
            </div>
        </Link>

    )
}
export default Card
