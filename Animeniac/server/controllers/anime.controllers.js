const User = require('../models/anime.models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {

    find : (request,response) => {
        User.find({})
        .then(displayUser => res.json(displayUser))
        .catch(error => response.json(error))
    },

    register : (request, response) => {
        User.create(request.body)
        .then(createUser => response.json({msg : 'Success!', createUser : createUser}))
        .catch(error => response.status(400).json(error))
    },

    findOne : (request, response) => {
        User.findOne({_id: request.params.id})
        .then(findOneUser => response.json(findOneUser))
        .catch(error => response.json(error))
    },

    update : (request,response) => {
        User.findByIdAndUpdate({_id: request.params.id})
        .then(updateUser => response.json(updateUser))
        .catch(error => response.status(400).json(error))
    },

    delete : (request,response) => {
        User.findOneAndDelete({_id : request.params.id})
        .then(deleteUser => response.json(deleteUser))
        .catch(error => response.json(error))
    }
}