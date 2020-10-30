let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Book = require('../models/books');


module.exports.displayBooksList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(books);
            res.render('books/list',  {title: 'Books', books: bookList
             //este books: pasa a list.ejs
        });      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
        res.render('books/add', {title: 'Add Book' //folder calling
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "title": req.body.title, //chacar bien si el req body esta bien usado
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });

}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; //ver si esto funciona aqui

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('books/edit', {title: 'Edit Book', books: bookToEdit//, books: books //check this books
           })//este books pasa a edit.ejs
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "title": req.body.title, //chacar bien si el req body esta bien usado
        "description": req.body.description,//las variables estan en mayus
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });
    
    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/books');
        }
    });
}