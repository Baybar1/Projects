const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/ChoreTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Successfully connected to chores'))
.catch(error => console.log('Error', error))