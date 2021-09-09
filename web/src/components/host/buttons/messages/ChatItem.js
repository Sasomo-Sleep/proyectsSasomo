
import './ChatItem.css'
import { Link } from 'react-router-dom';
import { useState, useContext, } from 'react'
import service from '../../../../services/sasomo-service';
import { useHistory } from 'react-router';
import { AuthContext } from '../../../../contexts/AuthContext';

function ChatItem({ users, id }) {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const userId = users.find(user => user.id !== auth.user?.id)
    
    const handleGetChat = () => {
        history.push(`/chats/${id}`)
    }

    return (
        <div className="chat-item m-3">

            <img src={userId.avatar} alt={userId.name} className="avatar align-self-start  w-100 rounded-circle me-3" />
            <div>
                <p className="m-0 text-muted">{userId.name}</p>
                {auth.user.properties.map(property => <p className="m-0 text-muted" key={property.id}> {property.name} </p>)}
            </div>
            <button onClick={handleGetChat}>ver chat</button>
        </div>
    )
}

export default ChatItem