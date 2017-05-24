// To load local environment variables 
var dotenv = require('dotenv');
dotenv.load();

module.exports = {
    "port" : process.env.PORT,   
};