const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')
const categories = require('../data/categories.json')

const eventSchema = new Schema({
    name: String,
    date: Date,
    description: String,
    price: Number,
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    },
    category:[ {
        type: String,
        enum: Object.keys(categories)
    }],
    image: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
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

const Event = mongoose.model('Event', eventSchema)
module.exports = Event