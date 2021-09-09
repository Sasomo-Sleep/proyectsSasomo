import { useContext, useState } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"




function Today() {

    const auth = useContext(AuthContext)

    console.log(auth.user, "ooooli")

    if (!auth.user) return <> </>
    return (
        <div className=" m-4">
            <img src={auth.user?.guestBookings[0].property.owner.avatar}
                alt={auth.user?.guestBookings[0].property.owner.name} />
            <div>
                <p>{auth.user?.guestBookings[0].property.owner.name}</p>
            </div>
        </div>
    )
}

export default Today