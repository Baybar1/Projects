const CommentController = require('../controllers/comments.controllers')

module.exports = app => {
    app.get('/api/comments', CommentController.find);
    app.post('/api/comments', CommentController.create);
    app.get('/api/comments/anime/:id', CommentController.findAnime);
    app.get('/api/comments/:id', CommentController.findAComment);
    app.put('/api/comments/:id', CommentController.update);
    app.delete('/api/comments/:id', CommentController.delete);
}