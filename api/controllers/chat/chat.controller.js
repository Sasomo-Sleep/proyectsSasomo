const Chat = require('../../models/chat/chat.model')
const Booking = require('../../models/booking.model')
const Message = require('../../models/chat/message.model')
const User = require('../../models/user.model')
const Property = require('../../models/property.model')

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
        .populate('users')
        .populate('messages')
        .then(chat => res.json(chat))
        .catch(next)
}



module.exports.getAll = (req, res, next) => {
    Chat.find({ users: req.user.id })
        .populate('users')
        .populate('messages')
        .then(chats => res.status(200).json(chats))
        .catch(next)
}

module.exports.newMessage = (req, res, next) => {

    Chat.findById(req.params.id)
        .then(chat => {
            return Message.create({
                message: req.body.message,
                user: req.user.id
            })
                .then(message => {
                    chat.messages.push(message);
                    chat.save();
                    res.json(chat)

                })
        })
        .catch(next)
}