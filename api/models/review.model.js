const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    cleanliness: Number,
    communication: Number,
    timeliness: Number,
    houseRules: Number,
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    booking: {
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review