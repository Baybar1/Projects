const Anime = require('../models/anime.models')

module.exports = {
    find: (request,response) => {
        Anime.find({})
        .then(displayAnime => response.json(displayAnime))
        .catch(error => response.json(error))
    } ,

    create: (request,response) => {
        Anime.create(request.body)
        .then(anime => response.json(anime))
        .catch(error => response.status(400).json(error))
    },

    findOne: (request,response) => {
        Anime.findOne({_id: request.params.id})
        .then(findOneAnime => response.json(findOneAnime))
        .catch(error => response.json(error))
    },

    update: (request,response) => {
        Anime.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateAnime => response.json(updateAnime))
        .catch(error => response.status(400).json(error))
    },

    delete: (request,response) => {
        Anime.findOneAndDelete({_id: request.params.id})
        .then(deleteAnime => response.json(deleteAnime))
        .catch(error => response.json(error))
    }
}