import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div id="nav-bottom" className="">
            <div>
                <Link to="/"><p>Today</p></Link>
            </div>
            <div>
                <Link to="/profile/my-chats"> <p>Messages</p></Link>
            </div>
            <div>
                <Link to="/"> <p>Calendar</p></Link>
            </div>
            <div>
                <Link to="/"> <p>Information</p></Link>
            </div>
            <div>
                <Link to="/menu"> <p>Menu</p></Link>
            </div>
        </div>
    )
}
export default Footer