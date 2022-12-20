const mongoose = require('mongoose')

const ChoreSchema = new mongoose.Schema({

    choreName: {
        type: String,
        required: [true, 'Add a name']
    },

    choreTitle: {
        type: String,
        required: [true, 'Add a chore']
    },

    choreDate: {
        type: String,
        required: [true, 'Specify the date']
    },

    choreTime: {
        type: String,
        required: [true, 'Set a time']
    }

}, {timestamps:true})

module.exports = mongoose.model('Chores', ChoreSchema)