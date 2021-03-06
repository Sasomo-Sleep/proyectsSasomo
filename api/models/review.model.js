const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    cleanliness: Number,
    communication: Number,
    timeliness: Number,
    houseRules: Number,
    comment: String,
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review