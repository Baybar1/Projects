const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/anime', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Successfully Connected'))
.catch(error => console.log('Error', error))