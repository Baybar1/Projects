const Comment = require('../models/comments.models')
const User = require('../models/user.models')

module.exports = {

    find: (request,response) => {
        Comment.find({})
        .then(comment => response.json(comment))
        .catch(error => {
            console.log(error)
            response.status(400).json(error)
        })
    },

    create: (request,response) => {
        Comment.create(request.body)
        .then(newComment => response.json(newComment))
        .catch((error) => {
            console.log(error)
            response.status(400).json(error)
        })
    },

    findAnime: (request,response) => {
        Comment.find({animeId:request.params.id})
        .then(comments => {
            response.json(comments)
        })
        .catch(error => {
            console.log(error)
            response.status(400).json(error)
        })
    },

    findAComment: (request,response) => {
        Comment.findById(request.params.id)
        .then(oneComment => response.json(oneComment))
        .catch(error => response.status(400).json(error))
    },

    update: (request,response) => {
        Comment.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updateComment => response.json(updateComment))
        .catch((error) => {response.status(400).json(error)})
    },
    
    delete: (request,response) => {
        Comment.findOneAndDelete({_id: request.params.id})
        .then(deleteComment => response.json(deleteComment))
        .catch(error => response.status(400).json(error))
    }

}