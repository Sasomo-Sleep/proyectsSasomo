const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

const Like = mongoose.model('Like', likeSchema)

module.exports = Like