
import './ChatItem.css'
import { Link } from 'react-router-dom';
import {  useContext, } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext';

function ChatItem({ users, id }) {
    const auth = useContext(AuthContext)
    const userId = users.find(user => user.id !== auth.user?.id)

   

    return (
        <div className="chat-item ">

            <img src={userId?.avatar} alt={userId?.name} className="avatar align-self-start  w-100 rounded-circle me-3" />
            <div>
                <Link to={`/chats/${id}`}>
                    <p className="m-0 text-muted">{userId?.name}</p>
                    {auth.user?.properties.map(property => <p className="m-0 text-muted" key={property.id}> {property.name.slice(0, 21)} </p>)}
                </Link>
            </div>
        </div>
    )
}

export default ChatItem