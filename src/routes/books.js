const express = require('express');
const DBconnect = require('../middlewares/DBconnect');
const errorMessages = require('../functions/errorMesages');
const bookSchema = require('../models/book');
const router = express.Router();

/* GET book listing. */
router.post('/cadastro', DBconnect, async function (req, res) {
  try {
    //#swagger.tags = ['Livro']
    let { titulo, num_paginas, isbn, editora } = req.body;
    const DBanswer = await bookSchema.create({ titulo, num_paginas, isbn, editora })

    res.status(200).json({
      status: "ok",
      statusMensagem: "Livro Criado com sucesso",
      resposta: DBanswer,
    })
  } catch (error) {
    return errorMessages(res, error);
  }
});

router.put('/edicao/:id', DBconnect, async function (req, res) {
  try {
    //#swagger.tags = ['Livro']
    //#swagger.description = "Criação de livros"
    let bookID = req.params.id;
    let { titulo, num_paginas, isbn, editora } = req.body;
    const bookExists = await bookSchema.findOne({ _id: bookID });
    if (!bookExists) {
      throw new Error("Livro não encontrado.");
    }
    const DBanswer = await bookSchema.updateOne({ _id: bookID }, { titulo, num_paginas, isbn, editora });

    if (DBanswer?.modifiedCount > 0) {
      const bookData = await bookSchema.findOne({ _id: bookID });
      res.status(200).json({
        status: "ok",
        statusMensagem: "Livro editado com sucesso",
        resposta: bookData,
      })
    }

  } catch (error) {
    return errorMessages(res, error);
  }
});

router.get('/', DBconnect, async function (req, res) {
  try {
    //#swagger.tags = ['Livro']
    //#swagger.description = "Edição de livros"

    const DBanswer = await bookSchema.find();

    res.status(200).json({
      status: "ok",
      statusMensagem: "Livros listados com sucesso",
      resposta: DBanswer,
    })
  } catch (error) {
    return errorMessages(res, error);
  }
});

router.get('/:id', DBconnect, async function (req, res) {
  try {
    //#swagger.tags = ['Livro']
    //#swagger.description = "Edição de livros"
    const bookID = req.params.id;
    const DBanswer = await bookSchema.findOne({_id: bookID});

    res.status(200).json({
      status: "ok",
      statusMensagem: "Livro listado com sucesso",
      resposta: DBanswer,
    })
  } catch (error) {
    return errorMessages(res, error);
  }
});

router.delete('/:id', DBconnect, async function (req, res) {
  try {
    //#swagger.tags = ['Livro']
    //#swagger.description = "Remoção de livros"
    let bookID = req.params.id;
    const bookExists = await bookSchema.findOne({ _id: bookID });
    if (!bookExists) {
      throw new Error("Livro não encontrado.");
    }

    const DBanswer = await bookSchema.deleteOne({_id: bookID});

    res.status(200).json({
      status: "ok",
      statusMensagem: "Livro deletado com sucesso",
      resposta: DBanswer,
    })
  } catch (error) {
    return errorMessages(res, error);
  }
});

module.exports = router;
