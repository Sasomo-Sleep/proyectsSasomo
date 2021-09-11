import './Today.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

function Card({ guest, checkIn, checkOut, id}) {
    return (

        <div className="cardToday">
            <Link to={`/detail/${id}`}>
                <div>
                    <p>Arrives {moment(checkIn).add(1, 'days').calendar()}</p>
                    <p>{guest.name}</p>
                    <p>{moment(checkIn).format('MMM Do')}-{moment(checkOut).format('MMM Do')}</p>
                </div>
                <div className="d-flex ">
                    <img src={guest.avatar} alt={guest.avatar} />

                </div>
            </Link>
        </div>

    )
}
{/*  boton abajo para escribir */ }
export default Card
