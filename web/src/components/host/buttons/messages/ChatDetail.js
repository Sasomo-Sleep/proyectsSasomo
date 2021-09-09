
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router';
import service from '../../../../services/sasomo-service';

function ChatDetail() {

    const { id } = useParams()
    const [chat, setChat] = useState()
    const [messages, setMessages] = useState()


    useEffect(() => {
        service.getChat(id)
            .then(chat => {
                setMessages(chat.messages)
                setChat(chat)
            })
            .catch(err => console.error(err))
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()
        service.message(id, 'texto')
            .then(message => setMessages([messages, message]))
            .catch(console.error)
    }
    if (!chat) return <> </>
    console.log(chat?.messages)
    return (
        <div className="chat m-4">
            <h1><i className="far fa-comment-alt"></i> {chat.users[1].name} && {chat.users[0].name} </h1>
            <div className="col-sm-6 mt-4">


                <small>
                {messages.map(mess =>
                    <p  key={mess.id}> {mess.message}</p>
                 )}</small>

                <form onSubmit={handleSubmit}>
                    <textarea name="message" className="form-control" placeholder="Your Message Here"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatDetail