const UserController = require('../controllers/anime.controllers')

module.exports = app => {
    app.get('/api/anime', UserController.find);
    app.post('/api/anime', UserController.register);
    app.get('/api/anime/:id', UserController.findOne);
    app.put('/api/anime/:id', UserController.update);
    app.delete('/api/anime/:id', UserController.delete);
}