const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    titulo: {
        type: String,
        required: 'é obrigatório',
    },
    num_paginas: {
        type: Number,
        required: 'é obrigatório',
    },
    isbn: {
        type: String,
        required: 'é obrigatório',
        unique: true,
    },
    editora: {
        type: String,
        required: 'é obrigatório',
    },
},
{
    timestamps: true
});

const bookSchema = mongoose.models.Livro || mongoose.model('Livro', schema);

module.exports = bookSchema;