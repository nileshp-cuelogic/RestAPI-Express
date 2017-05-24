var app = require('../../../app');
var UserController = require('../controllers/userController');
var UserValidator = require('../validators/userValidator');

app.get('/Users', UserController.getUsers);

app.get('/User/:id?', UserValidator.ValidateGetUserParameter, UserController.getUser);

app.post('/User', UserController.createUser);

app.put('/User', UserController.updateUser);

app.delete('/User', UserValidator.ValidateRemoveUserParameter, UserController.removeUser);