const mongoose = require('mongoose')
const User = require('../user.model')
const Message = require('./message.model')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
}, {
    virtuals: true,
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }
    }
})

chatSchema.virtual('messagechat', {
    ref: 'Message',
    localField: '_id',
    foreignField: 'messages',
    justOne: false
});

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
