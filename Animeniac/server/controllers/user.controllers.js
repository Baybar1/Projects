const User = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    register: (request,response) => {
        console.log('hello')
        const user = new User(request.body)
        console.log(user)

        user.save()
            .then((newUser) => {
                console.log(newUser)
                console.log('Succesfully Registered')
                response.json({
                    successMessage: 'Thank you for Registering',
                    user: newUser
                });
            })
            .catch((error) => {
                console.log('Register not successful')
                response.status(400).json(error)
            })
    },

    login : (request,response) => {
        User.findOne({email: request.body.email})
        .then((userRecord) => {
            if (userRecord === null) {
                response.status(400).json({message: 'Invalid login attempt'})
            } else {
                bcrypt.compare(request.body.password, userRecord.password)
                    .then((isPasswordValid) => {
                        if (isPasswordValid) {
                            console.log('password is valid');
                            response.cookie(
                                'usertoken',
                                jwt.sign(
                                {
                                    id: userRecord._id,
                                    email: userRecord.email,
                                    username: userRecord.username
                                },

                                process.env.SECRET_KEY
                            ),
                                {
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 9000000)
                                }
                            ).json({
                                message: 'Succesfully',
                                userLoggedIn: userRecord.username
                                // userId: userRecord._id
                            })
                        } else {
                            response.status(400).json({message: 'Invalid attempt'})
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        response.status(400).json({message: 'Invalid attempt'})
                    })
            }
        })
        .catch((error) => {
            console.log(error);
            response.status(400).json({message: 'Invalid attempt'})
        })
    },

    logout: (request,response) => {
        console.log('logging out');
        response.clearCookie('usertoken');
        response.json({message: 'You have successfully logged out'});
    },

    getLoggedInUser: (req,response) => {
        
        console.log(req.headers)
        console.log(req.headers.cookie)

        const token = req.headers.cookie.split("=")[1];
        console.log(token)
        

        const decodedJWT = jwt.decode(token, {
            complete: true
        })
        

        User.findOne({_id: decodedJWT.payload.id})
            .then((user) => {
                console.log(user)
                response.json(user)
            })
            .catch((error) => {
                console.log(error)
                
            })
    }


}

