import { useContext } from "react"
import { AuthContext } from "../../../../contexts/AuthContext"
import HeaderHost from "../../../common/header/HeaderHost"
import Card from "./Card"
import LoggedInPage from '../../../common/LoggedInPage'
function Today() {

    const auth = useContext(AuthContext)
    if (!auth.user) return <> </>
    return (
        <LoggedInPage>
        <div className="today-container mx-0" style={{marginTop: "70px !important"}}>
            <HeaderHost />
            {auth.user.hostBookings.map(booking =>
                <Card   {...booking} key={booking.id}/>
            )}
        </div>
        </LoggedInPage>
    )
}

export default Today