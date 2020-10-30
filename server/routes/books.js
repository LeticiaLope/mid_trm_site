// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let Book = require('../models/books');

// define the book model
let bookController = require('../controllers/books');

/* GET books List page. READ */
router.get('/', bookController.displayBooksList);// esta bn


//  GET the Book Details page in order to add a new Book
router.get('/add', bookController.displayAddPage); // cambie /add a /details
    /*****************
     * ADD CODE HERE *
     *****************/

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', bookController.processAddPage); //  cambie /add a /details

    /*****************
     * ADD CODE HERE *
     *****************/


// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', bookController.displayEditPage);

    /*****************
     * ADD CODE HERE *
     *****************/

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', bookController.processEditPage);

    /*****************
     * ADD CODE HERE *
     *****************/


// GET - process the delete by user id
router.get('/delete/:id', bookController.performDelete);

    /*****************
     * ADD CODE HERE *
     *****************/


module.exports = router;
