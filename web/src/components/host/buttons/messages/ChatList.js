
import { useState, useEffect, Component } from 'react';
import service from '../../../../services/sasomo-service';
import ChatItem from './ChatItem';

class ChatList extends Component {

    state = {
        chats: [],
    }

    fetchContacts() {
        service.getChats()
            .then(chats => this.setState({ chats}))
            .catch(err => console.error(err))
    }
    componentDidMount() {
        this.fetchContacts()
    }

    render() {
        const { chats } = this.state
        if (!chats) return <> </>
        return (
            <>
                    <div className="row mb-2">
                    <h1>Heyy</h1>
                        <div className="col" >
                            <ul className="list-group">
                                {chats.map(chat => 
                                <li key={chat.id} className="list-group.item list-group-item-action">
                                            <ChatItem  {...chat}/> 
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
            </>
        )
    }
}

export default ChatList