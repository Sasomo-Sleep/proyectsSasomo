import { useContext, useState } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"
import HeaderHost from "../../../common/header/HeaderHost"
import Card from "./Card"

function Today() {

    const auth = useContext(AuthContext)
/* <Card   {...booking} key={booking.id}/>
 */    console.log(auth.user, "ooooli")

    if (!auth.user) return <> </>
    return (
        <div className="m-4 ">
            <HeaderHost />
            {auth.user.hostBookings.map(booking =>
                <Card   {...booking} key={booking.id}/>
            )}
        </div>
    )
}

export default Today