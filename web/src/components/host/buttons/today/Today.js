import { useContext, useState } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"




function Today() {

    const auth = useContext(AuthContext)

    console.log(auth.user?.guestBookings[0].property.owner.name)

     if (!auth.user) return <> </>
    return (
        <div>
           {/*  {auth.user.guestBookings.owner.map( one => 
                <p>{one.name}</p> 
            )} */}

            <p>{auth.user?.guestBookings[0].property.owner.name}</p>
        </div>
    )
}

export default Today