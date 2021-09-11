import './Today.css'

function Card({ guest }) {
    return (

        <div className="cardToday">
            <div>
                <p>{guest.name}</p>
                <p>Cuando llega</p>
            </div>
            <div className="d-flex ">
                <img src={guest.avatar} alt={guest.avatar} />

            </div>
        </div>

    )
}

export default Card

{/* <div class="card" >
            <img src={guest.avatar} class="card-img-top" alt={guest.name}/>
            <div class ="card-body">
            <h5 class ="card-title">{guest.name}</h5>
            <a href="#" class ="btn btn-primary">Go somewhere</a>
            </div>
            
        </div> */}