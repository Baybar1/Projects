const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Comment is required'],
        minLength: [3, 'Comment must be at least 3 characters long']
    },

    userId: {
        type: String
    },

    animeId: {
        type: String
    }

}, {timestamps: true})

module.exports = mongoose.model('Comment', CommentSchema)