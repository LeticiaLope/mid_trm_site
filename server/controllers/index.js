let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');
//let passport = require('passport');

// enable jwt
//let jwt = require('jsonwebtoken');
//let DB = require('../config/db');

//create the user model instance
//let userModel = require('../models/user');
//let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('content/index', {title: 'Home'});
}

module.exports.displayBooksPage = (req, res, next) => {
    res.render('books/list', { title: 'Books'});
}
