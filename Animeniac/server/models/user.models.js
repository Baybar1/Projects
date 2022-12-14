const mongoose = require('mongoose');
const bcrypt = require('bcrypt')



const UserSchema = new mongoose.Schema ({
    username : {
        type: String,
        required : [true, 'Username is required'],
        minLength : [3, 'Username must be at least 3 characters long']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        validate : {
            validator : val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message : 'Please enter a valid email'
        }
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
        minLength : [6, 'Password must be at least 6 characters long']
    },
}, {timestamps: true})

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords must match')
        console.log('Passwords dont match')
    }
    next();
})

UserSchema.pre('save', function(next) {
    console.log('in pre save');
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            next();
        })
})

module.exports = mongoose.model('User', UserSchema)