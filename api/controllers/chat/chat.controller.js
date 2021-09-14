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
        .populate({
            path: 'messagechat',
            populate: {
                path: 'messages'
            }
        })
        .then(chat => res.json(chat))
        .catch(next)
}
/* 
module.exports.detail = (req, res, next) => {
    const chatId = req.params.id
    
    Message.updateMany({chat: chatId})
      .then(()=> {
        return Chat.findOne({_id: chatId})
          .populate({
            path: "users",
            select: "name avatar" 
          })
          .populate({
            path: "messages",
            populate: {
              path: "sender",
              select: "name"
            }
          })
          .then((chat) => {
            if(chat) {
              res.json(chat)
            } else {
              next(createError(404, "chat not found"))
            }
          })
      })
      .catch(next)
  }
 */

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
            if (!chat) {
                next()
            } else {
                return Message.create({
                    user: req.user.id,
                    meesage: req.body.message,
                    chat: req.params.id
                })
                    .then(message => res.status(200).json(message))
            }
        })
        .catch(next)
}

