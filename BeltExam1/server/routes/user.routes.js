const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/user/:id', UserController.getOneUser);
    app.post('/api/new', UserController.createNewUser);
    app.patch('/api/edit/:id', UserController.updateUser);
    app.delete('/api/delete/:id', UserController.deleteUser);
}
