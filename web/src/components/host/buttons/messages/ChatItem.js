
import './ChatItem.css'
import { Link } from 'react-router-dom';
import { useContext, } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext';

function ChatItem({ users, id }) {
    const auth = useContext(AuthContext)
    const userId = users.find(user => user.id !== auth.user?.id)



    return (
        <div className="chat-item ">

            <div>
                <Link to={`/chats/${id}`}>
                    {auth.user?.properties.map(property => <p className="m-0 text-muted" key={property.id}> {property.name.slice(0, 21)} </p>)}
                    <h6 className="m-0 ">{userId?.name}</h6>
                    <h6>26 sep. -12</h6>
                </Link>
            </div>
            <img src={userId?.avatar} alt={userId?.name} className="avatar  w-100 rounded-circle" />
        </div>
    )
}

export default ChatItem