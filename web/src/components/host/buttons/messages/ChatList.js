
import { useState, useEffect } from 'react';
import service from '../../../../services/sasomo-service';
import LoggedInPage from '../../../common/LoggedInPage';
import ChatItem from './ChatItem';

function ChatList() {
    const [chats, setChats] = useState()



    useEffect(() => {
        service.getChats()
            .then(chats => setChats(chats))
            .catch(err => console.error(err))
    }, [])
    console.log(chats, "eey")
    if (!chats) return <> </>
    return (
        <> <LoggedInPage>
            <div className="row m-4 mx-0">
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
            </LoggedInPage>
        </>
    )

}

export default ChatList