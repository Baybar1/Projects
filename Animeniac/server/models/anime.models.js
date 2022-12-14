const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema ({
    anime : {
        type: String
    },
    
},{timestamps:true})

module.exports = mongoose.model('Anime', AnimeSchema)