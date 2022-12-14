const AnimeController =require('../controllers/anime.controllers')

module.exports = app => {
    app.get('/api/anime', AnimeController.find);
    app.post('/api/anime', AnimeController.create);
    app.get('/api/anime/:id', AnimeController.findOne);
    app.put('/api/anime/:id', AnimeController.update);
    app.delete('/api/anime/:id', AnimeController.delete)
}