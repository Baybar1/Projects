const Chores = require('../models/chores.model')

module.exports = {

    find: (request,response) => {
        Chores.find({})
        .then(displayChores => response.json(displayChores))
        .catch(error => response.json(error))
    },

    create: (request,response) => {
        Chores.create(request.body)
        .then(newChore => response.json(newChore))
        .catch(error => response.status(400).json(error))
    },

    findOne: (request,response) => {
        Chores.findOne({_id:request.params.id})
        .then(findOneChore => response.json(findOneChore))
        .catch(error => response.json(error))
    },

    update: (request,response) => {
        Chores.findOneAndUpdate({_id:request.params.id},request.body, {new: true, runValidators: true})
        .then(updateChore => response.json(updateChore))
        .catch(error => response.status(400).json(error))
    },

    delete: (request,response) => {
        Chores.findOneAndDelete({_id:request.params.id})
        .then(deleteChore => response.json(deleteChore))
        .catch(error => response.json(error))
    }

}