const Chat = require('../../models/chat/chat.model')
const Booking = require('../../models/booking.model')
const Message = require('../../models/chat/message.model')
const User = require('../../models/user.model')

module.exports.create = (req, res, next) => {
    Booking.findById(req.params.bookingId)
        .populate('property')
        .then(booking => {
            return Chat.create({ users: [booking.guest, booking.property.owner] })
                .then(chat => {
                    res.json(chat)
                })
        })
        .catch(next)
}

module.exports.getChat = (req, res, next) => {
    Chat.findById(req.params.id)
        .populate('messages')
        .then(chat => {
            res.json(chat)
        })
        .catch(next)
}
module.exports.getAll = (req, res, next) => {
    Chat.find({users: req.user.bookingId})
}

/* module.exports.fake = (req, res, next) => {
    const newChat = new Chat({ users: [req.params.guest._id, booking.property.owner._id] })
    Booking.findById(req.params.bookingId)
        .then(booking => {
            Chat.find({ users: { $all: [booking.guest._id, booking.property.owner._id] } })
        })
        .catch(next)
} */
/* module.exports.create = (req, res, next) => {

    const newChat = new Chat({ users: [req.params.id, req.user.id] })
     Chat.find({ users: { $all: [req.params.id, req.user._id] }})
        .then(chat => {
            if (chat.length) {
                res.redirect(`/profile/chat/${chat[0]._id}`)
            } else {
                return newChat.save()
                .then(chat => {
                    res.redirect(`/profile/chat/${chat._id}`)
                })
            }
        })
        .catch(next)

} */
/* module.exports.create = (req, res, next) => {
    const newChat = new Chat({ users: [req.params.id, req.user.id] })
    Chat.find({ users: { $all: [req.params.id, req.user.id] } })
        .then(chat => {
            if (chat.length) {
                res.redirect(`/profile/${req.params.id}/chat/${chat[0].id}`)
            } else {
                return Chat.create(newChat)                      // -----------------------> funciona
                    .then(chat => {
                        res.redirect(`/profile/${req.params.id}/chat/${chat.id}`)
                        res.json(chat)
                        res.status({ "suces": "sucess" })
                    })
            }
        })
        .catch(next)
} */

/* module.exports.create = (req, res, next) => {
    const newChat = new Chat({ users: [req.params.profileId, req.user.id] })
    Chat.find({ users: { $all: [req.params.profileId, req.user.id] } })
        .then(chat => {
            return Chat.create(newChat)                      // -----------------------> funciona
                .then(chat => res.json(chat))
        })
        .catch(next)
}

module.exports.getChat = (req, res, next) => {
    Chat.findById(req.params.bookingId)
        //.populate('users')
        //.populate('messages')
        .then(chat => res.json(chat))
        .catch(next)
}

module.exports.allChats = (req, res, next) => {
    Chat.findById({ users: req.user.bookingId })
        .then(chats => res.json(chats))
        .catch(next)
}

module.exports.message = (req, res, next) => {
    Chat.findById(req.params.id)
        .then(chat => {
            console.log(chat)
            return Message.create({
                message: req.body.message,
                user: req.user.id
            })
                .then(message => {
                    return Chat.updateOne(
                        { id: chat.id },
                        { $push: { messages: message.id } }
                    )
                        .then(message => {
                            res.json(message)
                        })
                })
        })
        .catch(next)
} */