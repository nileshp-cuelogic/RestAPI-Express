var UserValidator = {};
var UserModel = require('./../model/userModel');

UserValidator.ValidateGetUserParameter = function (req, res, next) {
    if (!req.params || !req.params.id || isNaN(req.params.id) || req.params.id < 0) {
        return res.status(400).send({
            message: 'Invalid User Id'
        });
    }
    UserModel.find({
        UserId: req.body.UserId
    }, function (err, docs) {
        if (!docs.length) {
            return res.status(400).send({
                message: 'Record Not Found'
            });
        } else {
            next();
        }
    });
};

UserValidator.ValidateRemoveUserParameter = function (req, res, next) {

    if (!req.body || !req.body.UserId || isNaN(req.body.UserId) || req.body.UserId < 0) {
        return res.status(400).send({
            message: 'Invalid User Id'
        });
    }

    UserModel.find({
        UserId: req.body.UserId
    }, function (err, docs) {
        if (!docs.length) {
            return res.status(400).send({
                message: 'Record Not Found'
            });
        } else {
            next();
        }
    });
};


module.exports = UserValidator;