const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user.model')
const Property = require('./property.model')


const bookingSchema = new Schema({
    startDate: Date,
    endDate: Date,
    guestsClass: {
        type: [
            {
                quantity: {
                    type: Number,
                    min: 1,
                    max: 5
                },
                person: {
                    type: String,
                    enum: ["Adult", "Child", "Baby"]
                }
            }
        ]
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    confirmed: Boolean,
    review: String
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
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

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking