const mongoose = require('mongoose');
require('dotnet').config();
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'you need a title'], //custom mongoose errors
        maxLength: 100
    },
    content: {
        type: String,
        required: [true, 'you need some content'], //custom mongoose errors
        maxLength: 200
    },
    excerpt: {
        type: String,
        required: [true, 'Please type an excerpt'], //custom mongoose errors
        maxLength: 500
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
        required: true, 
    },
    director: {
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true,

    },
    validate: {
        validator: function(array) { //built-in validator
            return array.length >= 2
        },
        message: 'You must add at least three'
    },
    status: {
        type: String,
        required: true,
        enum: ['draft', 'public'],
        default: 'draft',
        index: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


const Articles = mongoose.Schema( 'articles', articleSchema);

module.exports = { Articles } 