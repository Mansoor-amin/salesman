var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://192.168.1.2/salesman");
var uniqueValidator = require('mongoose-unique-validator');

var usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true,unique: true},
    password: {type: String, required: true}
});
usersSchema.plugin(uniqueValidator);
exports.usersModel = mongoose.model("users", usersSchema);
