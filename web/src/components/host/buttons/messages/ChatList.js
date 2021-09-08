
import { useState, useEffect, Component } from 'react';
import service from '../../../../services/sasomo-service';
import ChatItem from './ChatItem';

function ChatList() {
    const [chats, setChats] = useState()

    useEffect(() => {
        service.getChats()
            .then(chats => setChats(chats))
            .catch(err => console.error(err))
    }, [])

    if (!chats) return <> </>
    return (
        <>
            <div className="row m-4">
                <h1>Heyy</h1>
                <div className="col" >
                    <ul className="list-group">
                        {chats.map(chat =>
                            <li key={chat.id} className="list-group.item list-group-item-action">
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