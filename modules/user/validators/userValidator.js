var Joi = require('joi');
var UserValidator = {};
var UserModel = require('./../model/userModel');

var JOIUserIdValidation = Joi.number().greater(0);

UserValidator.ValidateGetUserParameter = function (req, res, next) {

    Joi.validate(req.params.id, JOIUserIdValidation, function (err, val) {
        if (err) {
            return res.status(400).send({
                Error: err
            });
        } else {
            UserModel.find({
                UserId: req.params.id
            }, function (err, docs) {
                if (!docs.length) {
                    return res.status(400).send({
                        message: 'Record Not Found'
                    });
                } else {
                    next();
                }
            });
        }
    });
};

UserValidator.ValidateRemoveUserParameter = function (req, res, next) {

    Joi.validate(req.body.UserId, JOIUserIdValidation, function (err, val) {
        if (err) {
            return res.status(400).send({
                Error: err
            });
        } else {
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
        }
    });
};


module.exports = UserValidator;