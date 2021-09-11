
import { useState, useEffect, useContext } from 'react';
import service from '../../../../services/sasomo-service';
import ChatItem from './ChatItem';
import { useHistory } from 'react-router';
import { AuthContext } from '../../../../contexts/AuthContext';
function ChatList() {
    const [chats, setChats] = useState()

    const auth = useContext(AuthContext)
    const history = useHistory()


    useEffect(() => {
        service.getChats()
            .then(chats => setChats(chats))
            .catch(err => console.error(err))
    }, [])

    if (!chats) return <> </>
    return (
        <>
            <div className="row m-4">
                <h1>All your messages </h1>
                <div className="col" >
                    <ul className="list-group" style={{textDecoration: 'none'}}>
                        {chats.map(chat =>
                        
                            <li  key={chat.id} className="list-group.item list-group-item-action">
                                <ChatItem  {...chat} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default ChatList