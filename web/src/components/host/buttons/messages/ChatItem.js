
import './ChatItem.css'

function ChatItem({ users, id }) {
    console.log(users[0].name, "heeey")
    console.log(users[0].avatar, "hoyy")
    return (
        <div className="chat-item">
            <img src={users[0].avatar} alt={users[0].name} className="avatar align-self-start  w-100 rounded-circle me-3"/>
            <p>{users[0].name} </p>

        </div>
    )
}

export default ChatItem