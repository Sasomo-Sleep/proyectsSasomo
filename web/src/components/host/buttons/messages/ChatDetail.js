
import { useState, useEffect, } from 'react';
import { useParams, useHistory } from 'react-router';
import service from '../../../../services/sasomo-service';
import { NavBar, Icon } from 'antd-mobile';


function ChatDetail() {

    const { id } = useParams()
    const [chat, setChat] = useState()
    const [messages, setMessages] = useState()
    const [currentMessage, setCurrentMessage] = useState('')
    const history = useHistory()

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
        service.message(id, currentMessage)
            .then(message => setMessages([...messages, message]))
            .catch(console.error)
    }
    if (!chat) return <> </>
    console.log(chat, "comeculos")
    return (
        <>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => history.push('/profile/my-chats')}
            >Chating with {chat.users[0].name}  <i className="far fa-comment-alt"></i></NavBar>

            <div className="chat m-4">
                <div className="col-sm-6 mt-4">
                    {messages.map(mess =>
                        <p key={mess.id}> {mess.message}</p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <textarea value={currentMessage} name="message" onChange={(e) => setCurrentMessage(e.target.value)} className="form-control" placeholder="Your Message Here"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatDetail