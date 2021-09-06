import { useHistory } from "react-router"
import service from '../../services/sasomo-service';
import { AuthContext } from '../../contexts/AuthContext';
import {useContext} from 'react'



function Logout() {
    const history = useHistory()
    const auth = useContext(AuthContext)

    function handleLogout(){
        service.logout()
            .then(() => {
                auth.logout()
                history.push('/login')
            })
            .catch(err => console.error(err))
    }

    return(
        <div>
            <p>{auth.user?.email}</p>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    )

}
export default Logout