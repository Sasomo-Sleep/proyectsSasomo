import { useContext } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"
import HeaderHost from "../../../common/header/HeaderHost"
import Card from "./Card"

function Today() {

    const auth = useContext(AuthContext)
console.log(auth.user, "joli")
    if (!auth.user) return <> </>
    return (
        <div style={{marginTop: "70px"}}>
            <HeaderHost />
            {auth.user.hostBookings.map(booking =>
                <Card   {...booking} key={booking.id}/>
            )}
        </div>
    )
}

export default Today