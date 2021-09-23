const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('./user.model')

const likeSchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    virtuals: true,
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret
        }
    }
})
likeSchema.virtual('guestBookings', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'guest',
    justOne: false
});

const Like = mongoose.model('Like', likeSchema)

module.exports = Like