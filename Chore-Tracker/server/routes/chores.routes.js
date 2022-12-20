const ChoresController = require('../controllers/chores.controller')

module.exports = app => {
    app.get('/api/getChores', ChoresController.find);
    app.post('/api/createChore', ChoresController.create);
    app.get('/api/chore/:id', ChoresController.findOne);
    app.put('/api/chore/:id', ChoresController.update);
    app.delete('/api/chore/:id', ChoresController.delete);
}