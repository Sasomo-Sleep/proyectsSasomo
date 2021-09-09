
import { useState, useEffect } from 'react';
import service from '../../../../services/sasomo-service';

function ChatDetail({ id }) {

    const [chat, setChat] = useState()
    const [message, setMessage] = useState()

    useEffect(() => {
        service.getChat(id)
            .then(() => setChat(chat))
            .catch(err => console.error(err))
    }, [])

    function handleSubmit() {
        service.message()
            .then(() => setMessage(message))
            .catch(err => console.error(err))
    }

    return (
        <div className="chat">
            <h1><i className="far fa-comment-alt"></i></h1>
            <div className="col-sm-6 mt-4">
                
                
                <small></small>

                <form onSubmit={handleSubmit}>
                    <textarea name="message" className="form-control" placeholder="Your Message Here"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatDetail