var Boom = require('boom');
var UserModel = require('./../model/userModel');
var userController = {};

userController.getUsers = function (req, res) {
    UserModel.find().exec(function (err, result) {
        if (err) {
            return res.status(500).send(err);

        } else {
            return res.send({
                data: result
            });
        }
    });
};

userController.getUser = function (req, res) {
    UserModel.find().where({
        UserId: req.params.id
    }).exec(function (err, result) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.send({
                data: result
            });
        }
    });
};

// Save User
userController.createUser = function (req, res) {
    var newUser = new UserModel({
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Name: req.body.Name,
        Password: req.body.Password,
        Email: req.body.Email,
        Gender: req.body.Gender,
    });

    newUser.save(function (err) {
        if (err) {
            return res.send({
                Error: err
            });
        } else {
            return res.send({
                Message: 'Record Saved'
            });
        }
    });
};

// Update User
userController.updateUser = function (req, res) {
    var update = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Name: req.body.Name,
        Password: req.body.Password,
        Email: req.body.Email,
        Gender: req.body.Gender,
    };

    var condition = {
        UserId: req.body.UserId
    };

    UserModel.update(condition, update, {
        multi: true,
        runValidators: true
    }, function (err, rowsAffected, rawResponse) {
        if (err) {
            return res.send({
                Error: err
            });
        } else {
            return res.send({
                Message: rowsAffected.nModified + ' record updated'
            });
        }
    });
};

// Remove User
userController.removeUser = function (req, res) {
    var condition = {
        UserId: req.body.UserId
    };
    UserModel.remove(condition, function (err) {
        if (err) {
            return res.send({
                Error: err
            });
        } else {
            return res.send({
                Message: 'Record removed'
            });
        }
    });
};

module.exports = userController;